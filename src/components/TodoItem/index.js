// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const [isChecked, setIsChecked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const {todoItem, deleteTodo, updateTodo} = props
  const {id, title} = todoItem
  const [updateTitle, setUpdatedTitle] = useState(title)

  const onDelete = () => {
    deleteTodo(id)
  }
  const checkedClassName = isChecked ? 'checked' : ''
  return (
    <li className="todo-item-container">
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
          disabled={isEditing}
        />
      </div>
      {isEditing ? (
        <input
          type="text"
          value={updateTitle}
          className="title-input"
          autoFocus
          onChange={e => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <p className={`title ${checkedClassName}`}>{title}</p>
      )}
      <div className="button-container">
        <button
          type="button"
          className={`button ${isEditing ? 'save' : 'edit'}`}
          onClick={() => {
            setIsEditing(!isEditing)
            updateTodo(id, updateTitle)
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button type="button" className="delete button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
