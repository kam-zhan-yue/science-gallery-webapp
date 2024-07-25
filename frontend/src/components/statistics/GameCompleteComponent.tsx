import styled from "styled-components";
import { PlayerData } from "./PlayerData";
import CharacterDisplayComponent from "./CharacterDisplayComponent";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Border = styled(motion.div)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  height: 100%;
  width: 99%;
  border: 10px solid;
  border-image: url("../assets/ui/dialogue-box.png") 6 6 6 6 fill repeat;
`;

const GameCompleteComponent: React.FC<{ completes: PlayerData[] }> = ({
  completes,
}) => {
  const [index, setIndex] = useState<number>(0);
  const delay: number = 2000; // Increased delay for better visibility of the animation

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
      <div className='flex w-full h-full justify-center items-center'>
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5}}
          >
            <CharacterDisplayComponent player={completes[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Border>
  );
};

export default GameCompleteComponent;
