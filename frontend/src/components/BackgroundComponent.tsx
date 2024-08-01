import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { backgrounds } from "../setup/Background";
import { Blurhash } from "react-blurhash";

interface BackgroundComponentProps {
    backgroundKey: string;
}

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

const Blur = styled(Blurhash)`
  border: 5px white solid;
`

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
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setVisible(false);
        setImageLoaded(false);
        const timeout = setTimeout(() => {
            setCurrentKey(backgroundKey);
            setVisible(true);
        }, 510); // Duration of the fade-out animation
        return () => clearTimeout(timeout);
    }, [backgroundKey]);

    const handleImageLoad = () => {
      console.log('set image loaded to true')
        setImageLoaded(true);
    };

    const getBackground = () => {
        return `../assets/backgrounds/${backgrounds[currentKey].src}`;
    };

    function getBlur(): string {
      return backgrounds[currentKey].blur;
    }

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
            {currentKey in backgrounds && (
                <AnimatePresence>
                {visible &&
                    <Overlay
                      initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        transition={{ duration: 1 }}>
                        <BackgroundContainer>
                        {!imageLoaded &&
                          <Blur
                            hash={getBlur()}
                            width="100%"
                            height="100%"
                          />
                        }
                        <Border>
                          <Background
                              key={currentKey}
                              src={getBackground()}
                              alt="background"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5}}
                              onLoad={handleImageLoad}
                          />
                        </Border>
                        </BackgroundContainer>
                    </Overlay>
                  }
                </AnimatePresence>
            )}
        </>
    );
};

export default BackgroundComponent;
