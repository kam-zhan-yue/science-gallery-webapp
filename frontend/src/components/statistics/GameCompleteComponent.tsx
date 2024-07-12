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
`;

const ScrollingContainer = styled(motion.span)`
  will-change: transform;
`;

const GameCompleteComponent: React.FC<{ completes: PlayerData[] }> = ({
  completes,
}) => {
  const threshold: number = 0;
  const scrollTime: number = 5 * completes.length;
  const shouldScroll = completes.length > threshold;

  const firstScroll = {
    animate: {
      x: shouldScroll ? ["-100%", "-100%"] : "0%",
      transition: {
        ease: "linear",
        duration: 10,
        repeat: Infinity,
      },
    },
  };
  const secondScroll = {
    animate: {
      x: shouldScroll ? ["0%", "-200%"] : "0%",
      transition: {
        ease: "linear",
        duration: scrollTime,
        repeat: Infinity,
        delay: 10,
      },
    },
  };

  return (
    <>
      <CompleteContainer className="mt-6 w-full">
        {completes.length > 0 && (
          <>
            {/* <div className="flex"> */}
            <ScrollingContainer
              className="flex w-full gap-2 overflow-hidden"
              variants={firstScroll}
              animate="animate"
            >
              {completes.map((player, index) => (
                <CharacterDisplayComponent
                  key={player.id + "-" + index}
                  player={player}
                />
              ))}
            </ScrollingContainer>

            {/* {shouldScroll && (
                <>
                  <ScrollingContainer
                    className="flex w-full gap-2 overflow-hidden"
                    variants={secondScroll}
                    animate="animate"
                  >
                    {completes.map((player, index) => (
                      <CharacterDisplayComponent
                        key={player.id + "-duplicate-" + index}
                        player={player}
                      />
                    ))}
                  </ScrollingContainer>
                </>
              )} */}
            {/* </div> */}
          </>
        )}{" "}
      </CompleteContainer>
    </>
  );
};

export default GameCompleteComponent;
