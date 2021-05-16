import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

import { GridItem, Box, Image } from "@chakra-ui/react";

import front from "../media/PNG/yellow_back.png";

export default function Card({ idx, card, flipped, onClicked }) {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <GridItem
      w="10rem"
      h="10rem"
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onClicked(idx)}
    >
      <div className="card-body">
          <Box className="card-front" backgroundColor="black">
            {/* <Image objectFit="cover" src={front} alt="" /> */}
          </Box>
          <Box
            className="card-back"
            backgroundColor={card.back}
          ></Box>
      </div>
    </GridItem>
  );
}
