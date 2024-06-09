import React from "react";
import styled from "styled-components";
import Planet from "../classes/Planet.ts";
import DialogueBox from "./DialogueBox.tsx";

interface PlanetComponentProps {
    planet: Planet;
    onYesClicked?: () => void;
    onNoClicked?: () => void;
}

const Text = styled.div`
  font-size: 25px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const PlanetComponent: React.FC<PlanetComponentProps> = ({planet, onYesClicked, onNoClicked}) => {
    const yesClicked = () => {
        if(onYesClicked)
            onYesClicked();
    }

    const noClicked = () => {
        if(onNoClicked)
            onNoClicked();
    }

    return (
        <>
            <DialogueBox>
                <Text>Go to {planet.name}?</Text>
                <Text onClick={yesClicked}>Yes</Text>
                <Text onClick={noClicked}>No</Text>
            </DialogueBox>
        </>
    );
}

export default PlanetComponent;