import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

interface DialogueComponentProps {
    text: string;
}

const DialogueComponent: React.FC<DialogueComponentProps> = ({ text }) => {
    return (
        <>
            <Overlay>
                {text}
            </Overlay>
        </>
    );
};

export default DialogueComponent;
