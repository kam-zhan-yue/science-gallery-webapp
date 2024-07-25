import styled from "styled-components";
import { PlayerData } from "./PlayerData";
import CharacterDisplayComponent from "./CharacterDisplayComponent";
import { motion } from "framer-motion";

const Border = styled(motion.div)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  height: 100%;
  width: 100%;
  border: 20px solid;
  border-image: url("../assets/ui/corners.png") 6 6 6 6 fill repeat;
  `
const CompleteContainer = styled(motion.div)`
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 0)
  );
  margin-left: -15%;
  width: 130%;
  height: 100%;
`;

const ScrollingContainer = styled(motion.div)`
  will-change: transform;
  height: 100%;
`;

const GameCompleteComponent: React.FC<{ completes: PlayerData[] }> = ({
  completes,
}) => {
  const max: number = 7;
  const threshold: number = 5;
  const numShowing = completes.length > max ? max : completes.length;
  const scrollTime: number = 5 * numShowing;
  const shouldScroll = numShowing > threshold;

  const scroll = {
    animate: {
      x: shouldScroll ? [`0`, `-${numShowing*100}%`] : "0%",
      transition: {
        ease: "linear",
        duration: scrollTime,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
    <Border>
        <CompleteContainer className='flex justify-left items-center'>
          {completes.length > 0 && (
            <>
              <ScrollingContainer
                className="flex w-full gap-2"
                variants={scroll}
                animate="animate"
              >
                {completes.map((player, index) => (
                  <CharacterDisplayComponent
                    key={player.id + "-" + index}
                    player={player}
                  />
                ))}
              </ScrollingContainer>
            </>
          )}{" "}
        </CompleteContainer>
    </Border>
    </>
  );
};

export default GameCompleteComponent;
