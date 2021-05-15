import React, { useState, useEffect, useRef } from "react";
import { shuffleCards } from "../utils/helpers";

import Card from "./Card";

const playingCards = (() => {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  const suits = ["C", "D", "H", "S"];
  const cards = [];
  values.forEach((v) => {
    suits.forEach((s) => {
      const card = v + s
      const url = `../media/PNG/${card}.png`
      cards.push({
        type: card,
        image: url,
      });
    });
  });
  return cards;
})();

const colors = [
  "#ecdb54",
  "#e34132",
  "#6ca0dc",
  "#944743",
  "#dbb2d1",
  "#ec9787",
  "#00a68c",
  "#645394",
  "#6c4f3d",
  "#ebe1df",
  "#bc6ca7",
  "#bfd833",
];

export default function Game({ numCards, setMoves }) {
  const [deck, setDeck] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const timeout = useRef(null);

  const handleCardClicked = (idx) => {
    setOpenCards(opened => [...opened, idx])
  };

  const evaluate = () => {
    const [first, second] = openCards;
    const match = deck[first].pairId === deck[second].pairId;
    if (match) {}
  };

  useEffect(() => {
    const newDeck = [];
    for (let i = 0; i < numCards / 2; i++) {
      const first = {
        pairId: i,
        back: colors[i],
        flipped: false,
      };
      const second = {
        pairId: i,
        back: colors[i],
        flipped: false,
      };
      newDeck.push(first, second);
    }
    setDeck(shuffleCards(newDeck));
    console.log(newDeck);
  }, [numCards]);

  //   useEffect(() => {
  //     let timeout = null;
  //     if (openCards.length === 2) {
  //       timeout = setTimeout(evaluate, 300);
  //     }
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, [openCards]);
  useEffect(() => {
    const first = deck[openCards[0]]
    const second = deck[openCards[1]]
    
    if (second && first.pairId === second.pairId) {
        setMatched(prev => [...prev, first.pairId])
    }
    if (openCards.length === 2) {
        setTimeout(() => setOpenCards([]), 1000)
    }
    
  }, [openCards]);

  return (
    <div className="grid">
      {deck.map((card, idx) => {
        let flipped = false;
        if (openCards.includes(idx)) flipped = true;
        if (matched.includes(card.pairId)) flipped = true;
        return <Card key={idx} idx={idx} card={card} flipped={flipped} onClicked={handleCardClicked} />
      })}
    </div>
  );
}
