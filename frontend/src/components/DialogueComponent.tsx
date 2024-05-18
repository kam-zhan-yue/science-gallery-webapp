import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'html-react-parser';

const Overlay = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: rgba(50, 50, 50, 0.6); /* Adjust opacity and color */
  border-radius: 15px; /* Rounded corners */
  padding: 20px; /* Adjust padding */
  max-height: 300px; /* Max height of the dialogue box */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
`

const TitleText = styled.div`
  font-weight: bold;
`

const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  margin: 8px 0; /* Adjust margin */
`

const DialogueText = styled.div`
`

interface DialogueComponentProps {
    text: string;
}

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text }) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = text.indexOf(':');
    const characterName = colonIndex !== -1 ? text.substring(0, colonIndex).trim() : '';
    const dialogueBody = colonIndex !== -1 ? text.substring(colonIndex + 1).trim() : text;

    return (
        <>
            <Overlay>
                {/* Render character name, separator, and dialogue body separately if character name exists */}
                {characterName &&
                    <>
                        <TitleText>{characterName}</TitleText>
                        <Separator />
                    </>
                }
                <DialogueText>{ReactHtmlParser(dialogueBody)}</DialogueText>
            </Overlay>
        </>
    );
};

export default DialogueComponent;
