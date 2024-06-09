import React from 'react';
import styled from 'styled-components';
import Typewriter from "./Typewriter.tsx";
import DialogueBox from "./DialogueBox.tsx";

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

interface DialogueComponentProps {
    text: string;
    next?: () => void;
}

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text, next }) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = text.indexOf(':');
    const characterName = colonIndex !== -1 ? text.substring(0, colonIndex).trim() : '';
    const dialogueBody = colonIndex !== -1 ? text.substring(colonIndex + 1).trim() : text;

    return (
        <>
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
