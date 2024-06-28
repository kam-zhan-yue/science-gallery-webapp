import React, {useState} from "react";
import styled from "styled-components";
import Parallelogram from "./styled/Parallelogram.tsx";
import Triangle from "./styled/Triangle.tsx";
import CharacterSelectComponent from "./CharacterSelectComponent.tsx";
import {motion} from "framer-motion";
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
                    <Parallelogram
                        top={-180} left={-75}
                        width={125} height={90}
                        skew={50} rotate={50}
                        background={debug ? "red" : colors.primary}/>
                    <Parallelogram
                        top={-110} left={40}
                        width={150} height={90}
                        skew={50} rotate={110}
                        background={debug ? "gray" : colors.secondary}/>
                    <Parallelogram
                        top={80} left={-60}
                        width={150} height={100}
                        skew={50} rotate={110}
                        background={debug ? "white" : colors.primary}/>
                    <Parallelogram
                        top={-50} left={-260}
                        width={200} height={80}
                        skew={60} rotate={0}
                        background={debug ? "blue" : colors.primary}/>
                    <Triangle
                        top={-210} left={-150}
                        bleft={50} bright={50}
                        bbottom={250} rotate={126}
                        background={debug ? "green" : colors.secondary}
                        character='Doctor' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={-300} left={-180}
                        bleft={75} bright={75}
                        bbottom={150} rotate={155}
                        background={debug ? "yellow" : colors.primary}/>
                    <Triangle
                        top={0} left={-240}
                        bleft={100} bright={100}
                        bbottom={200} rotate={63}
                        background={debug ? "purple" : colors.secondary}/>
                    <Triangle
                        top={100} left={-175}
                        bleft={50} bright={50}
                        bbottom={300} rotate={24}
                        background={debug ? "pink" : colors.primary}
                        character='Mechanic' selectCharacter={viewCharacter}/>
                    <Triangle
                        top={280} left={-130}
                        bleft={50} bright={50}
                        bbottom={150} rotate={-10}
                        background={debug ? "orange" : colors.secondary}/>
                    <Triangle
                        top={200} left={20}
                        bleft={40} bright={40}
                        bbottom={200} rotate={155}
                        background={debug ? "cyan" : colors.secondary}/>
                    <Triangle
                        top={20} left={75}
                        bleft={60} bright={60}
                        bbottom={175} rotate={-140}
                        background={debug ? "teal" : colors.secondary}/>
                    <Triangle
                        top={-400} left={10}
                        bleft={75} bright={75}
                        bbottom={250} rotate={-160}
                        background={debug ? "fuchsia" : colors.primary}
                        character='Artist' selectCharacter={viewCharacter}
                    />
            </Overlay>
            {character !== '' &&
                <>
                    <CharacterSelectComponent
                        character={character}
                        select={select}
                        close={close}
                    />
                </>
            }
        </>
    )
}

export default MirrorComponent;