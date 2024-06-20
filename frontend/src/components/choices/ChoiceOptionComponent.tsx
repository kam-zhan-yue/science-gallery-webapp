// @ts-ignore
import {Choice} from "inkjs";
import styled from "styled-components";

interface ChoiceOptionProps {
    choice: Choice;
    index: number;
    handleClick: (index: number) => void;
}

const ChoiceOption = styled.div<{buttonUrl: string}>`
  margin: 10px;
  padding: 10px 10px;
  border: 10px solid;

  border-image: url(${props => props.buttonUrl}) 40 fill repeat;
  cursor: pointer;
  width: 80%;
  max-width: 500px;
  box-sizing: border-box;

  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const ChoiceOptionComponent: React.FC<ChoiceOptionProps> = ({choice, index, handleClick}) => {
    // Splitting the text into character name and dialogue body if a colon exists
    const colonIndex = choice.text.indexOf(':');
    const choiceType = colonIndex !== -1 ? choice.text.substring(0, colonIndex).trim() : '';
    const choiceText = colonIndex !== -1 ? choice.text.substring(colonIndex + 1).trim() : choice.text;

    const prefix: string = "../../assets/ui/";

    const buttonUrl = (): string => {
        let button: string = 'button-normal.png';
        if(choiceType === "important") {
            button = "button-important.png";
        } else if(choiceType === "inventory") {
            button = "button-inventory.png";
        } else if(choiceType === "attack") {
            button = "button-attack.png";
        } else if(choiceType === "speech") {
            button = "button-speech.png";
        }
        return prefix+button;
    }

    return (
      <>
          <ChoiceOption buttonUrl={buttonUrl()} onClick={() => {handleClick(index)}}>
              {choiceText}
          </ChoiceOption>
      </>
    );
}

export default ChoiceOptionComponent;