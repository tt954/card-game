import React, { useState } from "react";

import front from "../media/PNG/yellow_back.png";

export default function Card({ card, onClicked }) {
  const [flipped, setFlipped] = useState(false);

  const handleClicked = () => {
    setFlipped(!flipped)
    onClicked(card.pairId);
  };

  return (
    <div className={`card ${flipped ? 'is-Flipped' : ''}`} onClick={handleClicked}>
      <div className="card-face front">
        <img src={front} alt="" />
      </div>
      <div
        className="card-face back"
        style={{ backgroundColor: card.back }}
      ></div>
    </div>
  );
}
