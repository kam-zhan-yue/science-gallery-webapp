import React from 'react';
import styled from 'styled-components';
import Typewriter from "./Typewriter.tsx";
import DialogueBox from "./DialogueBox.tsx";
import {motion} from "framer-motion";
import {characters} from "../setup/Character.ts";

const TitleText = styled.div`
  font-size: 40px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 0.8em;
  margin-top: -5px;
`

const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  margin: 8px 0; /* Adjust margin */
`

const CharacterContainer = styled(motion.div)`
  position: fixed;
  bottom: 200px;
  top: 120px;
  left: 20px;
  right: 20px;
  border: 5px white solid;
  border-radius: 5px;
`

const Character = styled(motion.img)`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensures the image covers the area while maintaining aspect ratio
  z-index: -1;      // Make sure it is behind the overlay
`

interface DialogueComponentProps {
    text: string;
    next?: () => void;
}

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text, next }) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = text.indexOf(':');
    const characterName = colonIndex !== -1 ? text.substring(0, colonIndex).trim() : '';
    const dialogueBody = colonIndex !== -1 ? text.substring(colonIndex + 1).trim() : text;

    const getCharacter = (): string => {
        if(characterName === "Ship") {
            return `../assets/characters/${characters[characterName]}`;
        } else {
            return `../assets/characters/${characters[characterName]}`;
        }
    }

    return (
        <>
            {characterName && characterName in characters &&
                <>
                    <CharacterContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: {duration: 1} }}
                        transition={{ duration: 1 }}>
                        <Character src={getCharacter()} alt='character'/>
                    </CharacterContainer>
                </>
            }

            <DialogueBox>
                {/* Render character name, separator, and dialogue body separately if character name exists */}
                {characterName &&
                    <>
                        <TitleText>{characterName}</TitleText>
                        <Separator />
                    </>
                }
                <Typewriter text={dialogueBody} delay={20} next={next}/>
            </DialogueBox>
        </>
    );
};

export default DialogueComponent;
