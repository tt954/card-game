import React, { useState, useEffect, useRef } from "react";
import { shuffleCards } from "../utils/helpers";

import Card from "./Card";

const playingCards = (() => {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  const suits = ["C", "D", "H", "S"];
  const cards = [];
  values.forEach((v) => {
    suits.forEach((s) => {
      cards.push({
        type: v + s,
        image: require(`../media/PNG/${v + s}.png`),
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
  const [deck, setDeck] = useState([])
  const [openCards, setOpenCards] = useState([])
  const timeout = useRef(null)

  const handleCardClicked = (pairId) => {
    if (openCards.length === 1) {
        setOpenCards((prev) => [...prev, pairId]);
        setMoves(moves => moves + 1)
    } else {
        setOpenCards([pairId]);
    }
  }

  const evaluate = () => {
    const [first, second] = openCards
    if (first === second) {
        console.log('match')
    }
  }

  useEffect(() => {
    const newDeck = [];
    for (let i = 0; i < numCards / 2; i++) {
      const first = {
        id: 2 * i,
        pairId: i,
        back: colors[i],
      };
      const second = {
        id: 2 * i + 1,
        pairId: i,
        back: colors[i],
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

  return (
    <div className="grid">
      {deck.map((card) => (
        <Card key={card.id} card={card} onClicked={handleCardClicked}/>
      ))}
      {console.log(openCards)}
    </div>
  );
}
