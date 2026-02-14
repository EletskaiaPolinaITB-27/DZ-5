import { MovieItem } from "../MovieItem/MovieItem"

interface Movie {
  id: number
  title: string
  watched: boolean
  likeStatus: "like" | "dislike" | null
}

interface MovieListProps {
  movies: Movie[]
  onDeleteMovie: (id: number) => void
  onToggleWatched: (id: number) => void
  onLike: (id: number) => void
  onDislike: (id: number) => void
}

export const MovieList = ({
  movies,
  onDeleteMovie,
  onToggleWatched,
  onLike,
  onDislike
}: MovieListProps) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDeleteMovie}
          onToggleWatched={onToggleWatched}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </div>
  )
}

