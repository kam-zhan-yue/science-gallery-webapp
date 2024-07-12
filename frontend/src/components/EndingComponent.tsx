import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TextStyle } from "./styled/Text.tsx";
import { colours } from "./styled/Constants.tsx";
import { AnimatePresence, motion } from "framer-motion";
import CreditsComponent from "./CreditsComponent.tsx";
import { InvisibleBlocker } from "./styled/Blocker.tsx";
import { GameContext, GameContextType, GameState } from "../contexts/GameContext.tsx";

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

const EndingComponent: React.FC<EndingProps> = ({ ending, restart }) => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const {setState} = useContext(GameContext) as GameContextType;


  useEffect(() => {
    if (!scrolling && ending !== 'sheep') {
      const timer = setTimeout(() => {
        setScrolling(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [ending, scrolling]);

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
          {!scrolling && (
            <motion.div
              key="ending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
                {ending === "sheep" && <>
                    <Title key="gameOver">GAME OVER</Title>
                    <Restart onClick={restart}>Restart</Restart>
                  </>
                  }
                {ending !== "sheep" && <Title key="thanks">Thanks for Playing!</Title>}
            </motion.div>
          )}
          </AnimatePresence>

          {scrolling &&
            <>
              <CreditsComponent />
              <InvisibleBlocker onClick={()=> {setState(GameState.Menu)}}/>
            </>
          }
      </Overlay>
    </>
  );
};

export default EndingComponent;
