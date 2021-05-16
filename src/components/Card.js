import React, { useState } from "react";

import { GridItem, Box, Image } from "@chakra-ui/react";

import front from "../media/PNG/yellow_back.png";

export default function Card({ idx, card, flipped, onClicked }) {

  return (
    <GridItem
      w="10rem"
      h="10rem"
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onClicked(idx)}
    >
      <div className="card-body">
        <Box
          className="card-front"
          bgGradient="linear(to-r,gray.300,yellow.400,pink.200)"
        >
          {/* <Image
            src="https://images.pexels.com/photos/737552/pexels-photo-737552.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="card-face-image"
            borderRadius="0.25rem"
          /> */}
        </Box>
        <Box className="card-back" backgroundColor={card.back}></Box>
      </div>
    </GridItem>
  );
}
