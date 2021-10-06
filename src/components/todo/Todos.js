import Todo from './Todo'

const Todos = ({ data, onDelete, onToggle }) => {
  return (
    <>
      {
        data.map(todo => (
          <Todo 
            key={todo.id}
            todoChild={todo}
            onDeleteMusic={onDelete}
            onToggleReminder={onToggle}
          />
        ))
      }
    </>
  )
}

export default Todos
