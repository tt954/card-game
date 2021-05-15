import React, { useState } from "react";

import front from "../media/PNG/yellow_back.png";

export default function Card({ idx, card, flipped, onClicked }) {
  
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => onClicked(idx)}>
      <div className="card-face front">
        <img src={front} alt="" />
      </div>
      <div
        className="card-face back"
        style={{ backgroundColor: card.back }}
      >hello
      </div>
    </div>
  );
}
