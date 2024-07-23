import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TextStyle } from "../styled/Text.tsx";
import { colours } from "../styled/Constants.tsx";
import { AnimatePresence, motion } from "framer-motion";
import CreditsComponent from "./CreditsComponent.tsx";
import { InvisibleBlocker } from "../styled/Blocker.tsx";
import { GameContext, GameContextType, GameState } from "../../contexts/GameContext.tsx";
import BlurbComponent from "./BlurbComponent.tsx";

interface EndingProps {
  ending: string;
  restart: () => void;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(0, 0, 0, 0.7);

  -webkit-transition: 1s all;
  transition: 1s all;
`;

const Title = styled(TextStyle)`
  font-size: 64px;
  color: ${colours.secondary};
  margin-bottom: 20px;
  line-height: 1em;
  text-align: center;
`;

const Restart = styled(TextStyle)`
  font-size: 28px;
  line-height: 1em;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  border: solid 15px #42ffee;
  padding: 0 30px;
  border-image: url("../assets/ui/button.png") 10 fill repeat;

  transition: 0.3s;
  -webkit-transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

enum EndingState {
  Blurb,
  Thanks,
  GameOver,
  Credits
}

const EndingComponent: React.FC<EndingProps> = ({ ending, restart }) => {
  const [ endState, setEndState ] = useState<EndingState>(EndingState.Blurb);
  const { setState } = useContext(GameContext) as GameContextType;

  function returnToMenu() {
    setState(GameState.Menu);
  }

  function endGame(){
    if(ending === 'sheep') {
      setEndState(EndingState.GameOver);
    } else {
      setEndState(EndingState.Thanks);
      const timer = setTimeout(() => {
        setEndState(EndingState.Credits);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }

  return (
    <>
      <Overlay
        key="endingOverlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence>
        {endState === EndingState.Blurb &&
            <motion.div
              key="ending_blurb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}>
                <BlurbComponent ending={ending} complete={endGame}/>
            </motion.div>
          }
          {endState === EndingState.GameOver && (
            <motion.div
              key="ending_sheep"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <>
                <Title key="gameOver">GAME OVER</Title>
                <Restart onClick={restart}>Restart</Restart>
              </>
            </motion.div>
          )}
          {endState === EndingState.Thanks && (
            <motion.div
              key="ending_thanks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Title key="thanks">Thanks for Playing!</Title>
            </motion.div>
          )}
          </AnimatePresence>

          {endState === EndingState.Credits &&
            <>
            <CreditsComponent complete={returnToMenu} />
              <InvisibleBlocker onClick={returnToMenu}/>
            </>
          }
      </Overlay>
    </>
  );
};

export default EndingComponent;
