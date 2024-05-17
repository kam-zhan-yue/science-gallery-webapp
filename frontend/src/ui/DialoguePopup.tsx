import React, { forwardRef, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Header = styled.h1`
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;

`

interface DialoguePopupProps {
  // Define any props the component might take
}

const DialoguePopup: React.FC<DialoguePopupProps> = (props) => {
  return (
    <Overlay>
        Test DialoguePopup
    </Overlay>
  );
};

export default DialoguePopup;