import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {characters} from "../setup/Character.ts";
import {TextStyle} from "./styled/Text.tsx";
import {colours} from "./styled/Constants.tsx";
import {BackButton, SelectButton} from "./styled/Buttons.tsx";

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
`


const Background = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 400px;
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

  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 35px solid;
    border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;
  }
`;

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
  font-size: 16px;
  line-height: 1em;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
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
            <Overlay
              key='characterSelectComponent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.2 }}>
                <Background>
                    <CharacterContainer>
                        <Character src={getImage()} alt={character}/>
                    </CharacterContainer>
                    <Title>The {character}</Title>
                    <Description>{characters[character].description}</Description>
                    <SelectButton onClick={() => select(character)}>Select</SelectButton>
                    <BackButton onClick={close}>Back</BackButton>
                </Background>
            </Overlay>
    );
}

export default CharacterSelectComponent;
