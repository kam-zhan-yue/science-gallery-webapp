import React, { useState } from 'react';
import styled from 'styled-components';
import KeypadButtonComponent, { KeypadType } from '../KeypadButtonComponent';
import Planet from '../../classes/Planet';
import {motion} from "framer-motion";
import {TextStyle} from "../styled/Text.tsx";
import { EventBus } from '../../EventBus.tsx';
import { planets } from "../../setup/PlanetData"
import GuideComponent from "../GuideComponent"
import { colours } from '../styled/Constants.tsx';

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

const Text = styled(TextStyle)`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  transition: 0.3s all;
  -webkit-transition: 0.3s all;

  &:hover {
    cursor: pointer;
    color: ${colours.secondary};
  }
`

const CodeText = styled.div`
  font-size: 50px;
  font-family: 'VT323', monospace;
  font-weight: 800;
  font-style: normal;
  line-height: 1em;
  color: white;
`;

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
    handleCodeInput: (code: number) => void;
    planet: Planet;
}

const KeypadComponent: React.FC<KeypadComponentProps> = ({planet, handleCodeInput}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>('')
    const planetData = planets[planet.name]
    const hint = planetData.hint
    const help = planetData.help

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
      <>
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

              <div className='flex justify-center gap-20 m-3'>
                {hint && <Text onClick={() => setPrompt("AI: " + hint)}>Hint</Text>}
                {help && <Text onClick={() => setPrompt("AI: " + help)}>Help</Text>}
              </div>
          </KeypadOverlay>
          <div className="absolute bottom-6">
            {prompt && <GuideComponent prompt={prompt} />}
          </div>
      </>
    );
};

export default KeypadComponent;
