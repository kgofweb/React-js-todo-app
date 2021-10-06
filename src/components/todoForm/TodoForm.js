import { useState } from "react"
import { 
  TodoFormStyled, 
  FormControl,
  SaveMusic
} from "./TodoForm.styled"

const TodoForm = ({ onAdd }) => {
  const [musicTitle, setMusicTitle] = useState('')
  const [artistName, setArtistName] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmitForm = e => {
    e.preventDefault();

    // Verify fields are empty
    if(!musicTitle && !artistName) {
      alert('Please, Add a music or artist')
      return;
    } else {
      // Add everything
      onAdd({ musicTitle, artistName, reminder })

      // Clear sate if everything is add
      setMusicTitle('')
      setArtistName('')
      setReminder(false)
    }
  }

  return (
    <TodoFormStyled onSubmit={onSubmitForm}>
      <FormControl>
        <label htmlFor='addTask'>Music Title</label>
        <input 
          type="text" 
          id='addTask'
          placeholder='Add music title'
          // New state value
          value={musicTitle}
          // Get user input
          onChange={e => setMusicTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor='artist-name'>Artist Name</label>
        <input 
          type="text" 
          id='artist-name' 
          placeholder='Add artist name'
          // New state value
          value={artistName}
          // Get user input
          onChange={e => setArtistName(e.target.value)}
        />
      </FormControl>
      <FormControl className="form-control-check">
        <label htmlFor='reminder'>Set Reminder</label>
        <input 
          type='checkbox' 
          id='reminder'
          // Check if input checkbox is check or not
          checked={reminder}
          // New state value
          value={reminder}
          // Listen change state
          onChange={event => setReminder(event.currentTarget.checked)}
        />
      </FormControl>

      <SaveMusic type='submit'>
        Save Music
      </SaveMusic>
    </TodoFormStyled>
  )
}

export default TodoForm
