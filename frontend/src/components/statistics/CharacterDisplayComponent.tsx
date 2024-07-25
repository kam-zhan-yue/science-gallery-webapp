import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { characters } from "../../setup/Character.ts";
import { TextStyle } from "../styled/Text.tsx";
import { PlayerData } from "./PlayerData.ts";

const Background = styled(motion.div)`
  width: 20vw;
  min-width: 100%;
  // width: 100%;
  // height: 100%;
  aspect-ratio: 1/1;
  background: black;
  text-align: center;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  // border: 10px solid;
  // border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const Character = styled(motion.img)``;

const Title = styled(TextStyle)`
  font-size: 24px;
  font-weight: 800;
  line-height: 1em;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CharacterDisplayComponent: React.FC<{ player: PlayerData }> = ({
  player,
}) => {
  const prefix: string = "../assets/characters/";
  const getImage = (): string => {
    if (!player) return "";
    if (player.class in characters) {
      const char = characters[player.class];
      if (char.fullBody) return prefix + char.fullBody;
    }
    return "";
  };
  return (
    <>
      <Background>
        <Character src={getImage()} />
        <Title>{player.name}</Title>
      </Background>
    </>
  );
};

export default CharacterDisplayComponent;
