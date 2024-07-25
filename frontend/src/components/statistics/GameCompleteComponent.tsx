import styled from "styled-components";
import { PlayerData } from "./PlayerData";
import CharacterDisplayComponent from "./CharacterDisplayComponent";
import { motion } from "framer-motion";

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
  width: 100%;
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
      x: shouldScroll ? [`${numShowing*100}%`, `-${numShowing*100}%`] : "0%",
      transition: {
        ease: "linear",
        duration: scrollTime,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <CompleteContainer>
        {completes.length > 0 && (
          <>
            <ScrollingContainer
              className="flex w-full overflow-visible"
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
    </>
  );
};

export default GameCompleteComponent;
