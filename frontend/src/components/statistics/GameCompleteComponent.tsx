import styled from "styled-components";
import { PlayerData } from "./PlayerData";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { colours } from "../styled/Constants";
import { TextStyle } from "../styled/Text";
import { characters } from "../../setup/Character";

const Border = styled(motion.div)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  height: 100%;
  width: 99%;
  border: 1px solid ${colours.primary};
  border-radius: 5px;
  background: black;
`;

const Character = styled.img`
  height: 90%;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  `

const Title = styled(TextStyle)`
  font-size: 36px;
  font-weight: 800;
  line-height: 1em;
  margin-top: 5px;
`;

const GameCompleteComponent: React.FC<{ completes: PlayerData[] }> = ({
  completes,
}) => {
  const [index, setIndex] = useState<number>(0);
  const delay: number = 2000; // Increased delay for better visibility of the animation

  const prefix: string = "../assets/characters/";
  const getImage = (): string => {
    if (!completes[index]) return "";
    if (completes[index].class in characters) {
      const char = characters[completes[index].class];
      if (char.portrait) return prefix + char.portrait;
    }
    return "";
  };

  useEffect(() => {
    if (index < completes.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, completes]);

  return (
    <Border>
    <AnimatePresence>
      <motion.div className='flex justify-center items-center'
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
      >
        {/* <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5}}
          >
                <CharacterDisplayComponent player={completes[index]} />
          </motion.div>
        </AnimatePresence> */}
            <Character className='absolute bottom-10' src={getImage()}/>
            <div className='absolute bottom-3'>
              <Title>{completes[index].name}</Title>
            </div>
        {/* <Character className='absolute bottom-10' src='../assets/characters/doctor_portrait.png'/>
        <div className='absolute bottom-3'>
          <Title>{completes[index].name}</Title>
        </div> */}
      </motion.div>
      </AnimatePresence>
    </Border>
  );
};

export default GameCompleteComponent;
