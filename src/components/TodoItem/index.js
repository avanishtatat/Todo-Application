// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item-container">
      <p className="title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
