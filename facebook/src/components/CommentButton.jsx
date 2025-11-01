import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import "./Home.css";

function CommentButton() {
  const [commented, setCommented] = useState(false);
  const [count, setCount] = useState(0);

  const handleComment = () => {
    if (commented) {
      setCommented(false);
      setCount(count - 1);
    } else {
      setCommented(true);
      setCount(count + 1);
    }
  };

  return (
    <button className={`action-btn ${commented ? "active" : ""}`} onClick={handleComment}>
      <FaRegComment style={{ marginRight: "5px" }} />
      {commented ? "Commented" : "Comment"} {count > 0 && `• ${count}`}
    </button>
  );
}

export default CommentButton;
