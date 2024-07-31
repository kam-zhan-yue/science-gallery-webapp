import React, { useState } from 'react';
import styled from 'styled-components';
import { Choice } from 'inkjs/engine/Choice';
import KeypadButtonComponent, { KeypadType } from './KeypadButtonComponent';
import Planet from '../classes/Planet';
import {motion} from "framer-motion";
import {TextStyle} from "./styled/Text.tsx";
import { EventBus } from '../EventBus.tsx';
import GuideComponent from './GuideComponent.tsx';

const KeypadOverlay = styled(motion.div)`
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
  margin-bottom: 5px;
`;

const CodeText = styled.div`
  font-size: 50px;
  font-family: 'VT323', monospace;
  font-weight: 800;
  font-style: normal;
  line-height: 1em;
  color: white;
`;

// const BackButton = styled(TextStyle)`
//   margin-top: 10px;
//   width: 60px;
//   height: 60px;
//
//   display: flex;
//   align-items: center;
//   justify-items: center;
//   justify-content: center;
//   border: solid 20px #42ffee;
//   border-image: url("../assets/ui/button.png") 15 fill repeat;
//
//   transition: 0.3s;
//   -webkit-transition: 0.3s;
//
//   font-size: 36px;
//
//   &:hover {
//     cursor: pointer;
//   }
// `;

const KeypadContainer = styled(motion.div)`
  border: 20px solid;
  border-image: url("../assets/ui/button.png") 15 15 15 15 fill repeat;
`

const Error = styled(TextStyle)`
  height: 20px;
  text-align: center;
  margin-bottom: 12px;
  font-size: 20px;
  color: #FF000D;
`

interface KeypadComponentProps {
    choices: Choice[];
    handleCodeInput: (code: number) => void;
    planet: Planet;
}

const KeypadComponent: React.FC<KeypadComponentProps> = ({planet, handleCodeInput}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    const handleSubmit = () => {
        if (inputValue === planet.code) {
            setShowError(false);
            handleCodeInput(planet.choice);
            EventBus.emit('correct')
        } else {
            // Incorrect code: trigger shake animation
            setShowError(true);
            EventBus.emit('incorrect')
        }
    };

    const handleKeypadClick = (type: KeypadType, code: string) => {
        setShowError(false);
        if (type === KeypadType.Submit) {
            handleSubmit();
        } else if (type === KeypadType.Delete) {
            if (inputValue.length > 0) setInputValue(inputValue.substring(0, inputValue.length - 1));
        } else {
            if (inputValue.length < 4) setInputValue(inputValue + code);
        }
    };

    return (
          <KeypadOverlay
              key="keypadComponent"
              initial={{ top: '100%', opacity: 0 }}
              animate={{ top: '50%', opacity: 1 }}
              exit={{ top: '100%', opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}>
              <KeypadContainer>
                  <CodeBackground>
                      <CodeText>{inputValue}</CodeText>
                  </CodeBackground>
                  {showError && <Error>INCORRECT CODE</Error>}
                  {!showError && <Error></Error>}
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
                  </div>
              </KeypadContainer>
          </KeypadOverlay>
    );
};

export default KeypadComponent;
