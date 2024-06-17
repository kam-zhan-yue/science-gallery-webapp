import React from 'react';
import styled from 'styled-components';
import {Choice} from "inkjs/engine/Choice";

const ScreenOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const ChoiceOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column; /* Display choices vertically */
  align-items: center; /* Center horizontally */
`

const ChoiceOption = styled.button`
  margin: 10px;
  padding: 10px 10px;
  border: 10px solid;

  border-image: url("../assets/ui/button.png") 10 10 10 10 fill repeat;
  cursor: pointer;
  width: 200px;
  box-sizing: border-box;
  
  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  color: white;
`

interface ChoiceComponentProps {
    choices: Choice[];
    handleChoiceClick: (choiceIndex: number) => void;
}

const ChoiceComponent: React.FC<ChoiceComponentProps> = ({ choices, handleChoiceClick }) => {
    return (
        <ScreenOverlay>
        <ChoiceOverlay>
            {choices.map((choice, index) => (
                <ChoiceOption key={index} onClick={() => handleChoiceClick(index)}>
                    {choice.text}
                </ChoiceOption>
            ))}
        </ChoiceOverlay>
        </ScreenOverlay>
    );
};

export default ChoiceComponent;