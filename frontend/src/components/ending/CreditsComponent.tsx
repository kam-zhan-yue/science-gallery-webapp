import { motion } from "framer-motion";
import styled from "styled-components";
import { TextStyle } from "../styled/Text";
import { credits } from "../../setup/Credits";

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
  font-size: 32px;
  line-height: 1em;
  `

const Thanks = styled(TextStyle)`
  font-size: 20px;
  line-height: 1em;
`

const Playtester = styled(TextStyle)`
font-size: 16px;
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
        animate={{ y: "-150%" }}
        transition={{ duration: 30, ease: "linear" }}
        onAnimationComplete={complete}
        >
        <>
          <div className="flex">
            <div className="pl-5 w-1/2 flex flex-col items-center">
              <img className='mt-5 max-w-sm w-full border-2 border-white -rotate-3' src='../../assets/backgrounds/shangrila-main.png' alt='credits-1'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white rotate-2' src='../../assets/backgrounds/shangrila-cave.png' alt='credits-2'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white -rotate-6' src='../../assets/backgrounds/crafting-main.png' alt='credits-3'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white rotate-2' src='../../assets/backgrounds/new-nature-main.png' alt='credits-4'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white -rotate-3' src='../../assets/backgrounds/ship-navigation.png' alt='credits-5'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white rotate-2' src='../../assets/backgrounds/folding-main.png' alt='credits-6'/>
              <img className='mt-14 max-w-sm w-full border-2 border-white -rotate-6' src='../../assets/backgrounds/new-myths-main-light.png' alt='credits-7'/>
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
                <Thanks>Wato Kadowaki</Thanks>
              </Credit>
              <Credit>
                <SpecialThanks>Playtesters</SpecialThanks>
                <Playtester>Harriet Auld</Playtester>
                <Playtester>Chris Bennett</Playtester>
                <Playtester>Tilly Boleyn</Playtester>
                <Playtester>Jesse Chambers</Playtester>
                <Playtester>Bern Hall</Playtester>
                <Playtester>Marie Kinsey</Playtester>
                <Playtester>Shirley Liu</Playtester>
                <Playtester>Edith Rorke</Playtester>
                <Playtester>Xing Jun Seah</Playtester>
                <Playtester>Sunny Sirabas</Playtester>
                <Playtester>Tara Stoney</Playtester>
                <Playtester>Anthony Takyi</Playtester>
                <Playtester>Maisa Derav</Playtester>
                <Playtester>Victoria Bai</Playtester>
              </Credit>
            </div>
          </div>
          <div className='flex justify-center flex-col text-center mt-10 p-8'>
            <Subtitle>Re:Collect was made on the unceded Wurundjeri land. We pay respect to Elders past and present of the Kulin Nation and acknowledge First Nations people as the first artists and storytellers.</Subtitle>
            <Subtitle>This game was made for Science Gallery Melbourne and the SCI-FI: Mythologies Transformed exhibition, and was made possible by the generous support of Chartered Accountants Australia and New Zealand.</Subtitle>
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
