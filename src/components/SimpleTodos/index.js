import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputText: ''}

  deleteTodo = id => {
    const {todoList} = this.state
    const filterredTodos = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: filterredTodos})
  }

  addSingleTodo = inputText => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        title: inputText,
      }
      // console.log('New Todo =>', newTodo)
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        inputText: '',
      }))
    }
  }

  addMultipleTodo = (num, todo) => {
    const todoTitle = todo.join(' ').trim()
    const count = Number(num)

    if (todoTitle === '' || !Number.isInteger(count) || count <= 0) {
      return
    }

    const todosToAdd = Array.from({length: count}, () => ({
      id: crypto.randomUUID(),
      title: todoTitle,
    }))

    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...todosToAdd],
      inputText: '',
    }))
  }

  addTodo = () => {
    // console.log('ADD button clicked...')
    const {inputText} = this.state
    const inputTextList = inputText.split(' ')
    // console.log('Input Text List =>', inputTextList)
    const numberOfTodos = Number(inputTextList[inputTextList.length - 1])
    // console.log('Number of Todos =>', numberOfTodos)
    if (Number.isNaN(numberOfTodos)) {
      return this.addSingleTodo(inputText)
    }
    return this.addMultipleTodo(
      numberOfTodos,
      inputTextList.slice(0, inputTextList.length - 1),
    )
  }

  handleChange = e => {
    this.setState({inputText: e.target.value})
  }

  updateTodo = (id, updatedTitle) => {
    const {todoList} = this.state
    const updatedTodoList = todoList.map(eachTodo => {
      if (eachTodo.id === id && todoList.title !== updatedTitle) {
        const updatedTodo = {...eachTodo, title: updatedTitle}
        return updatedTodo
      }
      return eachTodo
    })
    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList, inputText} = this.state
    return (
      <div className="simple-todos-bg-container">
        <div className="simple-todos-container">
          <h1 className="simple-todo-heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              type="text"
              placeholder="Add Todo..."
              className="todo-input"
              value={inputText}
              onChange={this.handleChange}
            />
            <button type="button" className="add-button" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="simple-todo-list-container">
            {todoList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
                updateTodo={this.updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
