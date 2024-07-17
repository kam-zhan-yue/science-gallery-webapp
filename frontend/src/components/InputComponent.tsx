import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TextStyle } from "./styled/Text.tsx";
import {colours} from "./styled/Constants.tsx";
import {BackButton, SelectButton} from "./styled/Buttons.tsx";

interface NameSelectProps {
    select: (name: string) => void;
    skip: () => void;
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
`;

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Title = styled(TextStyle)`
  font-size: 32px;
  font-weight: 800;
  line-height: 1em;
  margin-bottom: 20px;
`;

const NameInput = styled.textarea<{ isValid: boolean }>`
  padding: 10px;
  margin-bottom: 20px;
  background: black;
  border: 3px solid ${props => (props.isValid ? colours.primary : colours.cancel)};
  border-radius: 4px;
  width: 100%;

  font-family: "VT323", monospace;
  line-height: 1em;
  font-size: 20px;
  text-align: center;
`;

const Submit = styled(SelectButton)<{ disabled: boolean}>`
  width: 100%;
  border-image: url("../assets/ui/button-submit.png") 6 fill repeat;
  background-color: ${props => (props.disabled ? 'grey' : 'initial')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

const InputComponent: React.FC<{text: string, submit: ()=>void}> = ({ text, submit}) => {
    const [name, setName] = useState("");
    const invalid = name.length <= 0;
    const disabled = name.length > 100;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(`is valid is: ${!disabled}`)
        setName(e.target.value);
    };

    const handleSubmit = () => {
        if (!invalid && !disabled) {
          submit();
        }
    };

    return (
        <>
          <Blocker/>
          <Overlay>
              <Background
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
              >
              <Title>{text}</Title>
              <NameInput type='text' value={name} onChange={handleInputChange} isValid={!disabled} />
                <Submit onClick={handleSubmit} disabled={invalid || disabled}>Submit</Submit>
              </Background>
          </Overlay>
        </>
    );
};

export default InputComponent;
