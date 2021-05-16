import React, { useState, useEffect } from "react";
import "./App.scss";

import { Container, Heading, Text, Stack, Button } from "@chakra-ui/react";

import Game from "./components/Game";

export default function App() {
  const [moves, setMoves] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [numCards, setNumCards] = useState(12);
  const [gameOver, setGameOver] = useState(true);

  const options = (
    <Stack direction="column" h="100%">
      <Heading as="h4" size="md">
        Choose a difficulty to begin.
      </Heading>
      <Stack direction="row" spacing={4}>
        <Button variant="outline" onClick={() => handleStart(12)}>
          Easy
        </Button>
        <Button variant="outline" onClick={() => handleStart(16)}>
          Medium
        </Button>
        <Button variant="outline" onClick={() => handleStart(20)}>
          Hard
        </Button>
      </Stack>
    </Stack>
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
    <Container maxH="100vh" centerContent>
      <header className="App-header">
        <div>
          <Heading as="h1" size="3xl">
            Card Memory Game
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Flip cards to find matching pairs.
          </Text>
        </div>
        <div>
          {gameOver ? null : (
            <Button variant="outline" onClick={handleRestart}>
              New game
            </Button>
          )}
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

      <Stack direction="row">
        <Text>Moves: {moves}</Text>
        <Text>High Score: {highScore}</Text>
      </Stack>
    </Container>
  );
}
