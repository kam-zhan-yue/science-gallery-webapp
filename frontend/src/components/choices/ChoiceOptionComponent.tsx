// @ts-ignore
import { Choice } from "inkjs";
import styled from "styled-components";
import React from "react";

interface ChoiceOptionProps {
    choice: Choice;
    index: number;
    handleClick: (index: number) => void;
}

const ChoiceContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const ChoiceImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const ChoiceText = styled.div`
  position: absolute;
  left: 20%;
  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  color: white; /* Adjust the color as needed */
  pointer-events: none;
`;

const ChoiceOptionComponent: React.FC<ChoiceOptionProps> = ({ choice, index, handleClick }) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = choice.text.indexOf(':');
    const choiceType = colonIndex !== -1 ? choice.text.substring(0, colonIndex).trim() : '';
    const choiceText = colonIndex !== -1 ? choice.text.substring(colonIndex + 1).trim() : choice.text;

    const prefix: string = "../../assets/ui/";

    const buttonUrl = (): string => {
        let button: string = 'button-normal.png';
        if (choiceType === "important") {
            button = "button-important.png";
        } else if (choiceType === "inventory") {
            button = "button-inventory.png";
        } else if (choiceType === "attack") {
            button = "button-attack.png";
        } else if (choiceType === "speech") {
            button = "button-speech.png";
        }
        return prefix + button;
    }

    const handleClickWrapper = () => {
        handleClick(index);
    }

    return (
        <ChoiceContainer onClick={handleClickWrapper}>
            <ChoiceImage src={buttonUrl()} />
            <ChoiceText>{choiceText}</ChoiceText>
        </ChoiceContainer>
    );
}

export default ChoiceOptionComponent;
