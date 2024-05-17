import React, { forwardRef, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import * as Inkjs from 'inkjs';
import data from '../assets/dialogue/test-story.ink';


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

    const inkStory = new Inkjs.Compiler(data).Compile();
  return (
    <Overlay>
        Test DialoguePopup
    </Overlay>
  );
};

export default DialoguePopup;