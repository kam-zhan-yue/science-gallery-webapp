import React from "react";
import styled from "styled-components";

const DialogueBackground = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  min-height: 150px;
  max-height: 300px; /* Max height of the dialogue box */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 30px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 600px) {
    padding-right: 30px;
  }
`;

const Decoration = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 72px;
  height: 144px;
`

interface OverlayProps {
    children: React.ReactNode;
}

const DialogueBox: React.FC<OverlayProps> = ({ children }) => {
    return (
        <>
            <DialogueBackground>
                <div className='flex justify-center max-w-2xl flex-col mx-auto'>
                    {children}
                </div>
            </DialogueBackground>

            <Decoration
                key={'dialogue-decoration'}
                id={'dialogue-decoration'}
                src={'../assets/ui/dialogue-decoration.png'}
                alt={'dialogue-decoration'}
            />
        </>
    );
};

export default DialogueBox;
