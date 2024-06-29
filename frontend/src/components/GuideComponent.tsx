import React from "react";
import styled from "styled-components";
import DialogueBox from "./DialogueBox.tsx";

const InputBlocker = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  touch-action: none;
`

const Text = styled.div`
  font-size: 25px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const GuideComponent: React.FC = () => {
    return (
        <>
            <InputBlocker/>
            <DialogueBox>
                <Text>
                    Choose a planet.
                </Text>
            </DialogueBox>
        </>
    );
}

export default GuideComponent;