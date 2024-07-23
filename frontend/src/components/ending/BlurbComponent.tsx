import { motion } from "framer-motion";
import styled from "styled-components";
import { TextStyle } from "../styled/Text";
import { endings } from "../../setup/Endings";
import Typewriter, { TypewriterHandle } from "../Typewriter";
import { useRef } from "react";

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

const Title = styled(TextStyle)`
  font-size: 48px;
  line-height: 1em;
`;

const BlurbComponent: React.FC<{ending: string, complete: () => void }> = ({ending, complete}) => {
  const typewriterRef = useRef<TypewriterHandle>(null);

  if(!(ending in endings)) {
    return 'No Ending Found!';
  }

  function handleClick() {
    if(typewriterRef.current) {
      typewriterRef.current.handleClick();
    }
  }

  return (
    <BlurbContainer onClick={handleClick}>
      <Title>{endings[ending].title}</Title>
      <div className="text-center max-w-2xl w-3/4 mt-6">
        <Typewriter ref={typewriterRef}
          text={endings[ending].description}
          fontSize={22}
          delay={30} next={complete}/>
      </div>
    </BlurbContainer>
  );
};

export default BlurbComponent;
