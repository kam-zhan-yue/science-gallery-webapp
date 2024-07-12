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
  overflow: visible;
`;

const Credit = styled(TextStyle)`
  margin-bottom: 30px;
  `

const Name = styled(TextStyle)`
  font-size: 30px;
  line-height: 1em;
`;

const Role = styled(TextStyle)`
  font-size: 14px;
  font-style: italic;
  line-height: 1em;
`;

const SpecialThanks = styled(TextStyle)`
  margin-top: 40px;
  font-size: 30px;
  line-height: 1em;
  `

const Thanks = styled(TextStyle)`
  font-size: 18px;
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
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 30, ease: "linear" }}
        onAnimationComplete={complete}
        >
        <>
          <div className="flex">
            <div className="pl-5 w-1/2 flex flex-col items-center">
              <img className='mt-5 max-w-md w-full border-2 border-white -rotate-3' src='../../assets/backgrounds/shangrila-main.png' alt='credits-1'/>
              <img className='mt-14 max-w-md w-full border-2 border-white rotate-6' src='../../assets/backgrounds/crafting-main.png' alt='credits-2'/>
              <img className='mt-14 max-w-md w-full border-2 border-white -rotate-2' src='../../assets/backgrounds/new-nature-main.png' alt='credits-3'/>
              <img className='mt-14 max-w-md w-full border-2 border-white rotate-3' src='../../assets/backgrounds/ship-navigation.png' alt='credits-4'/>
              <img className='mt-14 max-w-md w-full border-2 border-white -rotate-2' src='../../assets/backgrounds/new-light-main.png' alt='credits-5'/>
            </div>
            <div className="w-1/2 lg:text-center sm:text-right mr-10">
              {Object.keys(credits).map((creditKey) => (
                <Credit key={creditKey}>
                  <Name>{creditKey}</Name>
                  <Role>{credits[creditKey].role}</Role>
                </Credit>
              ))}
              <Credit>
                <SpecialThanks>Special Thanks</SpecialThanks>
                <Thanks>Ethel Villafranca</Thanks>
                <Thanks>ANZ Chartered Accountants</Thanks>
                <Thanks>ArtScience Museum</Thanks>
              </Credit>
            </div>
          </div>
          <div className='flex justify-center flex-col text-center mt-10'>
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
