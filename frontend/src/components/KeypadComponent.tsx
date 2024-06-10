import React, { useState } from 'react';
import styled from 'styled-components';
import { Choice } from 'inkjs/engine/Choice';
import KeypadButtonComponent, { KeypadType } from './KeypadButtonComponent';
import Planet from '../classes/Planet';

const KeypadOverlay = styled.div<{ shake: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column; /* Display choices vertically */
  align-items: center; /* Center horizontally */
`;

const CodeBackground = styled.div`
  width: 200px;
  height: 80px;
  background: #ffffff22;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CodeText = styled.div`
  font-size: 50px;
  font-family: 'VT323', monospace;
  font-weight: 800;
  font-style: normal;
  line-height: 1em;
  color: white;
`;

const BackButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: #afaebeaa;
  border: solid 5px #42ffee;
  border-radius: 5px;

  transition: 0.3s;
  -webkit-transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #afaebeff;
  }
`;

interface KeypadComponentProps {
    choices: Choice[];
    handleCodeInput: (code: number) => void;
    handleBackClicked: () => void;
    planet: Planet;
}

const KeypadComponent: React.FC<KeypadComponentProps> = ({planet, handleCodeInput, handleBackClicked,}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isShaking, setIsShaking] = useState<boolean>(false);

    const handleSubmit = () => {
        if (inputValue === planet.code) {
            handleCodeInput(planet.choice);
        } else {
            // Incorrect code: trigger shake animation
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Reset shake state after animation
        }
    };

    const handleKeypadClick = (type: KeypadType, code: string) => {
        if (type === KeypadType.Submit) {
            handleSubmit();
        } else if (type === KeypadType.Delete) {
            if (inputValue.length > 0) setInputValue(inputValue.substring(0, inputValue.length - 1));
        } else {
            if (inputValue.length < 4) setInputValue(inputValue + code);
        }
    };

    return (
        <>
            <KeypadOverlay shake={isShaking}>
                <CodeBackground>
                    <CodeText>{inputValue}</CodeText>
                </CodeBackground>
                <div className="grid grid-cols-3 gap-3">
                    <KeypadButtonComponent code={'1'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'2'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'3'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'4'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'5'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'6'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'7'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'8'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'9'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent type={KeypadType.Delete} onClick={handleKeypadClick} />
                    <KeypadButtonComponent code={'0'} type={KeypadType.Code} onClick={handleKeypadClick} />
                    <KeypadButtonComponent type={KeypadType.Submit} onClick={handleKeypadClick} />
                    <div />
                    <BackButton onClick={handleBackClicked} />
                    <div />
                </div>
            </KeypadOverlay>
        </>
    );
};

export default KeypadComponent;
