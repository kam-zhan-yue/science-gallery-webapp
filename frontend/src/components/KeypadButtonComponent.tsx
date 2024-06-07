import styled from "styled-components";
import React from "react";

export enum KeypadType {
    Code,
    Delete,
    Submit
}

interface KeypadButtonComponentProps {
    type: KeypadType,
    code?: string,
    onClick?: (type: KeypadType, code: string) => void;
}

const DeleteButton =  styled.div`
  width: 60px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: #ff0000bb;
  border: solid 5px #42ffee;
  border-radius: 5px;

  transition: 0.3s;
  -webkit-transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #ff0000ff;
  }
`

const SubmitButton = styled.div`
  width: 60px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: #00ff00bb;
  border: solid 5px #42ffee;
  border-radius: 5px;

  transition: 0.3s;
  -webkit-transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #00ff00;
  }
`

const KeypadBackground = styled.div`
  width: 60px;
  height: 80px;
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
`

const KeypadText = styled.div`
  font-size: 25px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const KeypadButtonComponent: React.FC<KeypadButtonComponentProps> = ({code, type, onClick}) => {

    const handleClick = () => {
        if(onClick === undefined) return;
        if(type === KeypadType.Code && code !== undefined) {
            onClick(type, code);
        } else if(type === KeypadType.Delete) {
            onClick(type, 'delete');
        } else if(type === KeypadType.Submit) {
            onClick(type, 'submit');
        }
    }

    return (
      <>
          {type === KeypadType.Code &&
              <>
                  <KeypadBackground onClick={handleClick}>
                    <KeypadText>{code}</KeypadText>
                  </KeypadBackground>
              </>
          }
          {type === KeypadType.Delete &&
              <>
                  <DeleteButton onClick={handleClick}/>
              </>
          }
          {type === KeypadType.Submit &&
              <>
                  <SubmitButton onClick={handleClick}/>
              </>
          }
      </>
    );
}

export default KeypadButtonComponent;