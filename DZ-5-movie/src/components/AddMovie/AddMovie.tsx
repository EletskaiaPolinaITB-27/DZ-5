import { useState } from "react"


interface AddMovieProps {
  onAddMovie: (title: string) => void
}

export const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
  const [movieValue, setMovieValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieValue(e.target.value)
  }

  const submitMovie = () => {
    const trimmedValue = movieValue.trim()
    if (!trimmedValue) return
    onAddMovie(trimmedValue)
    setMovieValue('')
  }

  return (
    <div className="add-container">
      <input
        type="text"
        placeholder="Write film"
        value={movieValue}
        onChange={handleChange}
      />
      <button onClick={submitMovie}>Add</button>
    </div>
  )
}
