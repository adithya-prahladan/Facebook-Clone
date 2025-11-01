import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./Home.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <button className={`action-btn ${liked ? "active" : ""}`} onClick={handleLike}>
      <FaThumbsUp style={{ marginRight: "5px" }} />
      {liked ? "Liked" : "Like"} {count > 0 && `• ${count}`}
    </button>
  );
}

export default LikeButton;
