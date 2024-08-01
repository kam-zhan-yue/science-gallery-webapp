import React, {useState} from "react";
import styled from "styled-components";
import Triangle from "../styled/Triangle.tsx";
import CharacterSelectComponent from "../CharacterSelectComponent.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {colours} from "../styled/Constants.tsx";

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
                        top={-200} left={-240}
                        bleft={120} bright={120}
                        bbottom={300} rotate={126}
                        background={debug ? "green" : colors.secondary}
                        character='Doctor' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={-230} left={10}
                        bleft={130} bright={130}
                        bbottom={350} rotate={-150}
                        background={debug ? "pink" : colors.primary}
                        character='Artist' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={-300} left={-100}
                        bleft={100} bright={100}
                        bbottom={320} rotate={-190}
                        background={debug ? "fuchsia" : colors.primary}
                        character='Mechanic' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={140} left={-10}
                        bleft={60} bright={60}
                        bbottom={170} rotate={-4}
                        background={debug ? "yellow" : colors.primary}/>
                    <Triangle
                        top={100} left={70}
                        bleft={90} bright={90}
                        bbottom={225} rotate={-50}
                        background={debug ? "red" : colors.primary}/>
                    <Triangle
                        top={40} left={-120}
                        bleft={75} bright={75}
                        bbottom={300} rotate={30}
                        background={debug ? "purple" : colors.secondary}/>
                    <Triangle
                        top={-80} left={-190}
                        bleft={50} bright={20}
                        bbottom={250} rotate={85}
                        background={debug ? "orange" : colors.secondary}/>
                    <Triangle
                        top={20} left={-190}
                        bleft={80} bright={40}
                        bbottom={200} rotate={55}
                        background={debug ? "cyan" : colors.secondary}/>
                    <Triangle
                        top={-30} left={100}
                        bleft={70} bright={60}
                        bbottom={225} rotate={-110}
                        background={debug ? "teal" : colors.secondary}/>
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
