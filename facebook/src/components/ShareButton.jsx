import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import "./Home.css";

function ShareButton() {
  const [shared, setShared] = useState(false);
  const [count, setCount] = useState(0);

  const handleShare = () => {
    if (shared) {
      setShared(false);
      setCount(count - 1);
    } else {
      setShared(true);
      setCount(count + 1);
    }
  };

  return (
    <button className={`action-btn ${shared ? "active" : ""}`} onClick={handleShare}>
      <FaShare style={{ marginRight: "5px" }} />
      {shared ? "Shared" : "Share"} {count > 0 && `• ${count}`}
    </button>
  );
}

export default ShareButton;
