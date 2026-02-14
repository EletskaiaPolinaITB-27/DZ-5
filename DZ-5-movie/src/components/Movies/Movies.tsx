import { useState } from "react"
import { AddMovie } from "../AddMovie/AddMovie" 
import { MovieList } from "../MovieList/MovieList" 
interface Movie {
  id: number
  title: string
  watched: boolean
  likeStatus: "like" | "dislike" | null
}

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  const onAddMovie = (title: string): void => {
    if (!title.trim()) return

    const newMovie: Movie = {
      id: Date.now(),
      title,
      watched: false,
      likeStatus: null
    }

    setMovies(prev => [...prev, newMovie])
  }

  const onDeleteMovie = (id: number): void => {
    setMovies(prev => prev.filter(movie => movie.id !== id))
  }

  const onToggleWatched = (id: number): void => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched, likeStatus: null }
          : movie
      )
    )
  }

  const onLike = (id: number): void => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, likeStatus: "like" } : movie
      )
    )
  }

  const onDislike = (id: number): void => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, likeStatus: "dislike" } : movie
      )
    )
  }

  return (
    <div className="movies-container">
      <AddMovie onAddMovie={onAddMovie} />
      <MovieList
        movies={movies}
        onDeleteMovie={onDeleteMovie}
        onToggleWatched={onToggleWatched}
        onLike={onLike}
        onDislike={onDislike}
      />
    </div>
  )
}
