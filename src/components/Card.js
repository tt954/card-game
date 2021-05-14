import React from 'react'

import front from "../media/PNG/yellow_back.png";

export default function Card({back}) {
    return (
      <div className="card">
        <div className="card-face front">
          <img src={front} alt="" />
        </div>
        <div className="card-face back" style={{ backgroundColor: back}}>
            hello
        </div>
      </div>
    );
}
