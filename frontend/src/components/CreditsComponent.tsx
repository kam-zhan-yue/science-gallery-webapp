import { motion } from "framer-motion";
import styled from "styled-components";
import { TextStyle } from "./styled/Text";
import { credits } from "../setup/Credits";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  -webkit-transition: 1s all;
  transition: 1s all;
`;

const CreditsContainer = styled(motion.div)`
  width: 100%;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  text-align: right;

  @media (max-width: 769px) {
    padding-right: 20px;
  }
`;

const Credit = styled(TextStyle)`
  margin-bottom: 30px;
  `

const Name = styled(TextStyle)`
  font-size: 36px;
  line-height: 1em;
`;

const Role = styled(TextStyle)`
  font-size: 16px;
  font-style: italic;
  line-height: 1em;
`;

const CreditsComponent: React.FC = () => {
  return (
    <>
      <Overlay>
        <CreditsContainer
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 3, ease: "linear" }}
        >
          {Object.keys(credits).map((creditKey) => (
            <Credit key={creditKey}>
              <Name>{creditKey}</Name>
              <Role>{credits[creditKey].role}</Role>
            </Credit>
          ))}
        </CreditsContainer>
      </Overlay>
    </>
  );
};

export default CreditsComponent;
