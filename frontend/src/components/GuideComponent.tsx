import React from "react";
import styled from "styled-components";
import DialogueBox from "./DialogueBox.tsx";

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
            <DialogueBox>
                <Text>
                    Choose a planet.
                </Text>
            </DialogueBox>
        </>
    );
}

export default GuideComponent;