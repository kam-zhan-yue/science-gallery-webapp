import React, {useState} from 'react';
import styled from 'styled-components';
import {Choice} from "inkjs/engine/Choice";

const KeypadOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column; /* Display choices vertically */
  align-items: center; /* Center horizontally */
`

interface KeypadComponentProps {
    choices: Choice[];
    handleCodeInput: (code: number) => void;
}

const KeypadComponent: React.FC<KeypadComponentProps> = ({ choices, handleCodeInput }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = () => {
        const code: string = inputValue;
        let found: number = -1;
        for(let i: number=0; i<choices.length; ++i) {
            console.log(choices[i].text);
            if(choices[i].text === code) {
                found = i;
            }
        }

        if(found >= 0) {
            console.log(`Found code ${code}`);
            handleCodeInput(found);
        } else {
            console.log(`Code ${code} is invalid`);
        }
    }

    return (
        <KeypadOverlay>
            <input
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </KeypadOverlay>
    );
};

export default KeypadComponent;