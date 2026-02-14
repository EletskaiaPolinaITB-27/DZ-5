import React from "react"
import { LikeDislike } from "../LikeDislike/LikeDislike"
import styles from "./style.module.css"

interface Movie {
  id: number
  title: string
  watched: boolean
  likeStatus: "like" | "dislike" | null
}

interface MovieItemProps {
  movie: Movie
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
  onLike: (id: number) => void
  onDislike: (id: number) => void
}

export const MovieItem = ({
  movie,
  onDelete,
  onToggleWatched,
  onLike,
  onDislike
}: MovieItemProps) => {

const handleCheckbox = (_e: React.ChangeEvent<HTMLInputElement>) => {
  onToggleWatched(movie.id)
}

return (
    <div className={styles.movie}>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={handleCheckbox}
      />

      <span className={movie.watched ? "watched" : ""}>
        {movie.title}
      </span>

      <button onClick={() => onDelete(movie.id)}>❌</button>

      {movie.watched && (
        <LikeDislike
          likeStatus={movie.likeStatus}
          onLike={() => onLike(movie.id)}
          onDislike={() => onDislike(movie.id)}
        />
      )}
    </div>
  )

}
