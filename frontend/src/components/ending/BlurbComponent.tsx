import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { TextStyle } from "../styled/Text";
import { endings } from "../../setup/Endings";
import Typewriter, { TypewriterHandle } from "../Typewriter";
import { useRef, useState } from "react";

const BlurbContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
`;

const Congratulations = styled(TextStyle)`
  margin-bottom: 10px;
  top: 50px;
  font-size: 48px;
  line-height: 1em;
  `

const Chosen = styled(TextStyle)`
  font-size: 20px;
  line-height: 1em;
  margin-bottom: 5px;
  `

const Title = styled(TextStyle)`
  font-size: 48px;
  line-height: 1em;
`;

const End = styled(TextStyle)`
  font-size: 22px;
  line-height: 1em;
  `

const EndImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 50%;
  max-width: 200px;
`

const BlurbComponent: React.FC<{ending: string, complete: () => void }> = ({ending, complete}) => {
  const typewriterRef = useRef<TypewriterHandle>(null);
  const [end, setEnd] = useState<string>('');

  if(!(ending in endings)) {
    return 'No Ending Found!';
  }

  function handleClick() {
    if(typewriterRef.current) {
      typewriterRef.current.handleClick();
    }
  }

  function completed() {
    const endLine = endings[ending].endLine;
    if (end === '' && endLine) {
        setEnd(endLine);
    }
  }

  return (
    <BlurbContainer onClick={handleClick}>
      <Congratulations>Congratulations!</Congratulations>
      <Chosen>You have chosen to:</Chosen>
      <Title>{endings[ending].title}</Title>
      {endings[ending].image &&
        <EndImage
          alt={endings[ending].image}
          src={`../../assets/backgrounds/${endings[ending].image}`}
        />
      }
      <div className="text-center max-w-2xl w-3/4">
        <Typewriter ref={typewriterRef}
          text={endings[ending].description}
          fontSize={22}
          delay={30}
          next={complete}
          completed={completed}
          />
      </div>
      <AnimatePresence>
        {end !== '' &&
          <motion.div className="text-center max-w-2xl w-3/4 mt-6"
            key="end_line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 1 }}>
            <End>{endings[ending].endLine}</End>
          </motion.div>
        }
      </AnimatePresence>
    </BlurbContainer>
  );
};

export default BlurbComponent;
