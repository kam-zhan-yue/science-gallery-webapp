import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {characters} from "../setup/Character.ts";
import {TextStyle} from "./styled/Text.tsx";

interface CharacterSelectProps {
    character: string,
    select: (character: string) => void;
    close: () => void;
}

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2A213899;
`

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Background = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 500px;
  max-height: 800px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 40px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 35px solid;
    border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;
  }
`;

const SelectButton = styled(TextStyle)`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 8px solid;
  width: 50%;
  height: 10%;
  font-size: 20px;
  border-image: url("../assets/ui/button-submit.png") 6 fill repeat;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`

const BackButton = styled(TextStyle)`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 6px solid;
  width: 25%;
  border-image: url("../assets/ui/button-cancel.png") 6 fill repeat;
  
  &:hover {
    cursor: pointer;
  }
`

const CharacterContainer = styled(motion.div)`
  width: 100%;
  border: 35px solid;
  border-image: url("../assets/ui/button.png") 15 15 15 15 fill repeat;
  overflow: hidden;
`

const Character = styled(motion.img)`
`

const Title = styled(TextStyle)`
  font-size: 32px;
  font-weight: 800;
  line-height: 1em;
  margin-top: 5px;
`

const Description = styled(TextStyle)`
  font-size: 18px;
  line-height: 1em;
  margin-top: 5px;
  margin-bottom: 10px;
`

const CharacterSelectComponent: React.FC<CharacterSelectProps> = ({character, select, close}) => {
    const prefix: string = '../assets/ui/';
    const getImage = (): string => {
        if(!character) return '';
        if(character in characters) {
            const char = characters[character];
            if(char.thumbnail)
                return prefix+char.thumbnail;
        }
        return '';
    }
    return (
        <>
            <Blocker onClick={close}/>
            <Overlay>
                <Background
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 0.3 }}>
                    <CharacterContainer>
                        <Character src={getImage()} alt={character}/>
                    </CharacterContainer>
                    <Title>The {character}</Title>
                    <Description>{characters[character].description}</Description>
                    <SelectButton onClick={() => select(character)}>Select</SelectButton>
                    <BackButton onClick={close}>Back</BackButton>
                </Background>
            </Overlay>
        </>
    );
}

export default CharacterSelectComponent;