import React, { useState } from "react";

import { GridItem, Box, Image } from "@chakra-ui/react";

import front from "../media/PNG/yellow_back.png";

export default function Card({ idx, card, flipped, onClicked }) {
  
  return (
    <GridItem
      w="100%" h="100%"
      className={`${flipped ? "flipped" : ""}`}
      onClick={() => onClicked(idx)}
    >
      <Box className="card-face front">
        <Image objectFit="cover" src={front} alt="" />
      </Box>
      <Box className="card-face back" style={{ backgroundColor: card.back }}>
        hello
      </Box>
    </GridItem>
  );
}
