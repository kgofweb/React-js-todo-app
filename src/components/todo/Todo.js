import { TodoStyled } from "./Todo.styled"
import { FaTrash } from 'react-icons/fa'

const Todo = ({ todoChild, onDeleteMusic, onToggleReminder }) => {
  return (
    <TodoStyled
      className={`${todoChild.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(todoChild.id)}
    >
      <h2 >
        {todoChild.musicTitle}{' '}
        <FaTrash 
          style={{ color: '#df4759' }}
          onClick={() => onDeleteMusic(todoChild.id)}
          onToggle={onToggleReminder}
        />
      </h2>
      <p>{todoChild.artistName}</p>
    </TodoStyled>
  )
}

export default Todo
