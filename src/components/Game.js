import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@chakra-ui/react";

import Card from "./Card";
import { colors, playingCards } from "../db/cardOptions";
import { shuffleCards } from "../utils/helpers";

export default function Game({ numCards, setMoves }) {
  const [deck, setDeck] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const timeout = useRef(null);

  const handleCardClicked = (idx) => {
    if (openCards.length === 1) {
      setOpenCards((opened) => [...opened, idx]);
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout);
      setOpenCards([idx]);
    }
  };

  const evaluate = () => {
    const first = deck[openCards[0]];
    const second = deck[openCards[1]];

    if (second && first.pairId === second.pairId) {
      setMatched((prev) => [...prev, first.pairId]);
    }
    timeout.current = setTimeout(() => setOpenCards([]), 1000);
  };

  useEffect(() => {
    const newDeck = [];
    const deck = shuffleCards(colors);
    for (let i = 0; i < numCards / 2; i++) {
      const first = {
        pairId: i,
        back: deck[i],
        flipped: false,
      };
      const second = {
        pairId: i,
        back: deck[i],
        flipped: false,
      };
      newDeck.push(first, second);
    }
    setDeck(shuffleCards(newDeck));
    console.log(deck);
    console.log(newDeck);
  }, [numCards]);

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4} my={4}>
      {deck.map((card, idx) => {
        let flipped = false;
        if (openCards.includes(idx)) flipped = true;
        if (matched.includes(card.pairId)) flipped = true;
        return (
          <Card
            key={idx}
            idx={idx}
            card={card}
            flipped={flipped}
            onClicked={handleCardClicked}
          />
        );
      })}
    </Grid>
  );
}
