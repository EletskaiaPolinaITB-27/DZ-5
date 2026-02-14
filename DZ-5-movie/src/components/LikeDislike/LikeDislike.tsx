import styles from "./style.module.css"

interface LikeDislikeProps {
  likeStatus: "like" | "dislike" | null
  onLike: () => void
  onDislike: () => void
}

export const LikeDislike = ({
  likeStatus,
  onLike,
  onDislike
}: LikeDislikeProps) => {
  return (
    <div className={styles.buttons}>
      <button onClick={onLike}>
        {likeStatus === "like" ? "👍" : "Like"}
      </button>

      <button onClick={onDislike}>
        {likeStatus === "dislike" ? "👎" : "Dislike"}
      </button>
    </div>
  )
}
