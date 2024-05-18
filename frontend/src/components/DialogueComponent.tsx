import React from 'react';
import styled from 'styled-components';

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
`

const DialogueText = styled.div`
`

interface DialogueComponentProps {
    text: string;
}

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text }) => {
    const [characterName, dialogueBody] = text.split(':').map(str => str.trim());

    return (
        <>
            <Overlay>
                {/* Render character name and dialogue body separately if character name exists */}
                {characterName && <TitleText>{characterName}</TitleText>}
                <DialogueText>{dialogueBody}</DialogueText>
            </Overlay>
        </>
    );
};

export default DialogueComponent;
