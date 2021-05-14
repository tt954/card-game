import React, { useState, useEffect } from "react";
import "./App.scss";

import Game from "./components/Game";

export default function App() {
  const [moves, setMoves] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [numCards, setNumCards] = useState(12);
  const [gameOver, setGameOver] = useState(true);

  const options = (
    <div>
      <button onClick={() => handleStart(12)}>Easy</button>
      <button onClick={() => handleStart(16)}>Medium</button>
      <button onClick={() => handleStart(20)}>Hard</button>
    </div>
  );

  const handleStart = (n) => {
    setNumCards(n)
    setGameOver(false)
  }

  const handleRestart = () => {
    setGameOver(true)
    setMoves(0)
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Card Memory Game</h1>
          <p>Flip cards to find matching pairs.</p>
        </div>
        <div>
          <div>Moves: {moves}</div>
          {/* <p>High Score: {highScore}</p> */}
          {gameOver ? null : <button onClick={handleRestart}>New game</button>}
        </div>
      </header>

      {gameOver ? (
        options
      ) : (
        <Game
          numCards={numCards}
          setMoves={setMoves}
          setHighScore={setHighScore}
        />
      )}
    </div>
  );
}
