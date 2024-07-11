import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { characters } from "../../setup/Character.ts";
import { TextStyle } from "../styled/Text.tsx";
import { PlayerData } from "./PlayerData.ts";

const Background = styled(motion.div)`
  width: 25%;
  max-width: 400px;
  max-height: 800px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 10px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const Character = styled(motion.img)``;

const Title = styled(TextStyle)`
  font-size: 32px;
  font-weight: 800;
  line-height: 1em;
  margin-top: 5px;
`;

const Description = styled(TextStyle)`
  font-size: 16px;
  line-height: 1em;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

const CharacterDisplayComponent: React.FC<{ player: PlayerData }> = ({
  player,
}) => {
  const prefix: string = "../assets/ui/";
  const getImage = (): string => {
    if (!player) return "";
    if (player.class in characters) {
      const char = characters[player.class];
      if (char.thumbnail) return prefix + char.thumbnail;
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
