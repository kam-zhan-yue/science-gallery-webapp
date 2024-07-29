import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundComponentProps {
    backgroundKey: string;
}

const backgrounds: { [key: string]: string } = {
    "ship_navigation": "ship-navigation.png",
    "shangrila_main": "shangrila-main.png",
    "shangrila_cave": "shangrila-cave.png",
    "new_nature_main": "new-nature-main.png",
    "folding_space_main": "folding-main.png",
    "crafting_main": "crafting-main.png",
    "new_myths_main": "new-myths-overview.png",
    "new_myths_silk": "new-myths-main.png",
    "new_myths_silk_voice": "new-myths-main-light.png",
    "new_light_main": "new-light-main.png",
    "obelisks_left": "obelisks-left.png",
    "obelisks_right": "obelisks-right.png",
    "obelisks": "obelisks.png",
};

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);
`;

const Black = styled(Overlay)`
  background: rgb(0, 0, 0, 0.8);
`;

const BackgroundContainer = styled(motion.div)`
  position: fixed;
  bottom: 200px;
  top: 120px;
  left: 20px;
  right: 20px;
  // border: 5px white solid;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 600px) {
    bottom: 240px;
  }
`;

const Border = styled(motion.div)`
  border: 5px white solid;
  height: 100%;
`

const Background = styled(motion.img)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ backgroundKey }) => {
    const [currentKey, setCurrentKey] = useState(backgroundKey);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false);
        const timeout = setTimeout(() => {
            setCurrentKey(backgroundKey);
            setVisible(true);
        }, 510); // Duration of the fade-out animation
        return () => clearTimeout(timeout);
    }, [backgroundKey]);

    const getBackground = () => {
        return `../assets/backgrounds/${backgrounds[currentKey]}`;
    };

    return (
        <>
            {backgroundKey === "empty" && <></>}
            <AnimatePresence>
            {backgroundKey === "black" && (
                <Black
                  key='blackComponent'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  transition={{ duration: 1 }}
                />
            )}
            </AnimatePresence>
            {backgroundKey in backgrounds && (
                <Overlay>
                    <BackgroundContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                      transition={{ duration: 1 }}
                    >
                        <AnimatePresence>
                            {visible && (
                              <Border>
                                <Background
                                    key={currentKey}
                                    src={getBackground()}
                                    alt="background"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5}}
                                />
                                </Border>
                            )}
                        </AnimatePresence>
                    </BackgroundContainer>
                </Overlay>
            )}
        </>
    );
};

export default BackgroundComponent;
