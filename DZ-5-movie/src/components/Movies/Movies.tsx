import { useState } from "react";


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




  
}