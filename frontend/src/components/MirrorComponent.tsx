import React, {useState} from "react";
import styled from "styled-components";
import Triangle from "./styled/Triangle.tsx";
import CharacterSelectComponent from "./CharacterSelectComponent.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {colours} from "./styled/Constants.tsx";

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colours.blocker};
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`

const colors = {
    primary: '#E9E9EB44',
    secondary: '#BDBDC488'
}

const debug: boolean = false;

interface MirrorProps {
    selectCharacter: (character: string) => void,
}

const MirrorComponent: React.FC<MirrorProps> = ({selectCharacter}) => {
    const [character, setCharacter] = useState<string>('');

    const viewCharacter = (char: string) => {
        setCharacter(char);
    }

    const select = (char: string) => {
        selectCharacter(char);
    }

    const close = () => {
        setCharacter('');
    }

    return (
        <>
            <Blocker/>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 0.3 }}>
                    <Triangle
                        top={-220} left={-240}
                        bleft={120} bright={120}
                        bbottom={300} rotate={126}
                        background={debug ? "green" : colors.secondary}
                        character='Doctor' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={-190} left={-50}
                        bleft={40} bright={40}
                        bbottom={170} rotate={165}
                        background={debug ? "yellow" : colors.primary}/>
                    <Triangle
                        top={0} left={-240}
                        bleft={100} bright={100}
                        bbottom={200} rotate={63}
                        background={debug ? "purple" : colors.secondary}/>
                    <Triangle
                        top={50} left={-155}
                        bleft={120} bright={120}
                        bbottom={350} rotate={12}
                        background={debug ? "pink" : colors.primary}
                        character='Mechanic' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={190} left={50}
                        bleft={50} bright={20}
                        bbottom={150} rotate={-5}
                        background={debug ? "orange" : colors.secondary}/>
                    <Triangle
                        top={50} left={20}
                        bleft={40} bright={40}
                        bbottom={200} rotate={185}
                        background={debug ? "cyan" : colors.secondary}/>
                    <Triangle
                        top={-100} left={75}
                        bleft={60} bright={60}
                        bbottom={175} rotate={-110}
                        background={debug ? "teal" : colors.secondary}/>
                    <Triangle
                        top={-300} left={10}
                        bleft={100} bright={100}
                        bbottom={300} rotate={-150}
                        background={debug ? "fuchsia" : colors.primary}
                        character='Artist' selectCharacter={viewCharacter}
                    />
            </Overlay>
          {character !== '' && <Blocker onClick={close}/>}
            <AnimatePresence>
            {character !== '' &&
                  <CharacterSelectComponent
                      character={character}
                      select={select}
                      close={close}
                  />
            }
            </AnimatePresence>
        </>
    )
}

export default MirrorComponent;
