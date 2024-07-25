import styled from "styled-components";
import { PlayerData } from "./PlayerData";
import CharacterDisplayComponent from "./CharacterDisplayComponent";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Border = styled(motion.div)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  height: 100%;
  width: 99%;
  border: 10px solid;
  border-image: url("../assets/ui/dialogue-box.png") 6 6 6 6 fill repeat;
  `
const CompleteContainer = styled(motion.div)`
  // -webkit-mask-image: linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0),
  //   rgba(0, 0, 0, 0) 10%,
  //   rgba(0, 0, 0, 1) 40%,
  //   rgba(0, 0, 0, 1) 60%,
  //   rgba(0, 0, 0, 0) 90%,
  //   rgba(0, 0, 0, 0)
  // );
`;

const GameCompleteComponent: React.FC<{ completes: PlayerData[] }> = ({
  completes,
}) => {
  const [index, setIndex] = useState<integer>(0);
  const delay: number = 100;

  useEffect(() => {
    if(index < completes.length-1) {
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
    <>
    <Border>
      <CompleteContainer className='flex w-full h-full justify-center items-center'>
        <CharacterDisplayComponent
            player={completes[index]}
          />
      </CompleteContainer>
    </Border>
    </>
  );
};

export default GameCompleteComponent;
