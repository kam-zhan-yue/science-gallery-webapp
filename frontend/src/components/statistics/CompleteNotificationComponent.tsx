import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { characters } from "../../setup/Character.ts";
import { TextStyle } from "../styled/Text.tsx";
import { colours } from "../styled/Constants.tsx";
import { PlayerData } from "./PlayerData.ts";
import { EventBus } from "../../EventBus.tsx";

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colours.blocker};
`;

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
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
  border: 30px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const CharacterContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

const Character = styled(motion.img)``;

const Title = styled(TextStyle)`
  font-size: 32px;
  font-weight: 800;
  line-height: 1em;
  margin-top: 10px;
`;

const Description = styled(TextStyle)`
  font-size: 24px;
`;

const CompleteNotificationComponent: React.FC = () => {
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const prefix: string = "../assets/ui/";
  const getImage = (): string => {
    if (!player) return "";
    if (player.class in characters) {
      const char = characters[player.class];
      if (char.thumbnail) return prefix + char.thumbnail;
    }
    return "";
  };

  useEffect(() => {
    EventBus.on("game_complete", (player: PlayerData) => {
      setPlayer(player);
    });
    return () => {
      EventBus.off("game_complete");
    };
  }, []);

  useEffect(() => {
    if (player) {
      const timer = setTimeout(() => {
        setPlayer(null);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [player]);

  function endingString(ending: string): string {
    if (ending == "sheep") {
      return "Is a Sheep.";
    } else if (ending == "forget") {
      return "Forgot Everything.";
    } else if (ending == "travel") {
      return "Is Forever Travelling.";
    } else if (ending == "memories") {
      return "Regained their Memories.";
    } else if (ending == "wake") {
      return "Woke up Shangri-La.";
    }
    return "Completed the Game.";
  }

  return (
    <>
      <AnimatePresence>
        {player && (
          <>
            <Blocker />
            <Overlay>
              <Background
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CharacterContainer>
                  <Character src={getImage()} alt={player.name + "_complete"} />
                </CharacterContainer>
                <Title>{player.name}</Title>
                <Description>{endingString(player.ending)}</Description>
              </Background>
            </Overlay>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompleteNotificationComponent;
