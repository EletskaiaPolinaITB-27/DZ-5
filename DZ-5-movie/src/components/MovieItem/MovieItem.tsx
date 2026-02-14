import React from "react"


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



}
