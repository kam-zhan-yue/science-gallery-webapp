import { motion } from "framer-motion";
import styled from "styled-components";
import { TextStyle } from "./styled/Text";
import { credits } from "../setup/Credits";

const ScrollContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: right;
`;

const CreditContainer = styled(motion.div)`
  text-align: center;

  @media (max-width: 600px) {
    text-align: right;
    margin-right: 20px;
  }
  `

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

const SpecialThanks = styled(TextStyle)`
  margin-top: 40px;
  font-size: 34px;
  line-height: 1em;
  `

const Thanks = styled(TextStyle)`
  font-size: 30px;
  line-height: 1em;
`

const Subtitle = styled(TextStyle)`
  font-size: 18px;
  line-height: 1em;
  margin-bottom: 10px;
  `

const CreditLogo = styled(motion.img)`
height: 75px;
  `

const CreditsComponent: React.FC<{complete: () => void }> = ({complete}) => {
  return (
    <>
      <ScrollContainer
        // initial={{ y: "100%" }}
        // animate={{ y: "-100%" }}
        // transition={{ duration: 30, ease: "linear" }}
        // onAnimationComplete={complete}
        >
        <>
          <CreditContainer>
            {Object.keys(credits).map((creditKey) => (
              <Credit key={creditKey}>
                <Name>{creditKey}</Name>
                <Role>{credits[creditKey].role}</Role>
              </Credit>
            ))}
            <Credit>
              <SpecialThanks>Special Thanks</SpecialThanks>
              <Thanks>Someone 1</Thanks>
              <Thanks>Someone 2</Thanks>
            </Credit>
          </CreditContainer>
          <div className='flex justify-center flex-col text-center'>
            <Subtitle>Made for Science Gallery Melbourne</Subtitle>
            <div className='flex flex-row justify-center gap-4'>
              <CreditLogo src="../assets/ui/science-gallery-logo-white.png" alt="science-gallery-credits"/>
              <CreditLogo src="../assets/ui/unimelb-logo-white.png" alt="unimelb-credits"/>
            </div>
          </div>
        </>
        </ScrollContainer>
    </>
  );
};

export default CreditsComponent;
