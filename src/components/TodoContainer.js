import { useState } from 'react'
// Styles
import GlobalStyles from './styles/Global'
import { ContainerStyled } from "./styles/Container.styled"
// Components
import Header from './header/Header'
import TodoForm from './todoForm/TodoForm'
import Todos from './todo/Todos'

const TodoContainer = () => {
  // Show Todo
  const [showTodo, setshowTodo] = useState(false)
  const [todo, setTodo] = useState([
    {
      id: 1,
      musicTitle: 'Come Home',
      artistName: 'Ava Max',
      reminder: true
    },
    {
      id: 2,
      musicTitle: 'Every Chance I Get',
      artistName: 'Lil Baby, Lil Durk',
      reminder: false
    },
  ])

  // Add new music
  const addMusic = (music) => {
    // Get id
    const id = Math.floor(Math.random() * 10000) + 1

    // Add new music
    const newMusic = {id, ...music}
    setTodo([...todo, newMusic])
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTodo(
      todo.map(todoRemind => todoRemind.id === id ?
        {...todoRemind, reminder: !todoRemind.reminder} : todoRemind
      )
    )
  }

  // Delete music
  const deleteMusic = (id) => {
    setTodo(todo.filter(todo => todo.id !== id))
  }

  return (
    <ContainerStyled>
      <GlobalStyles />
      <Header 
        // Toggle button and form
        onAdd={() => setshowTodo(!showTodo)}
        // Change text and color of button
        showAdd={showTodo}
      />

      { // Toggle view Form
        showTodo &&  <TodoForm onAdd={addMusic}/>
      }

      {todo.length > 0 ? (
        <Todos 
          data={todo}
          onDelete={deleteMusic}
          onToggle={toggleReminder}
        />
      ) : ('No music to show :(')}
    </ContainerStyled>
  )
}

export default TodoContainer
