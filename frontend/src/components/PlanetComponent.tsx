import React from "react";
import styled from "styled-components";
import Planet from "../classes/Planet.ts";

interface PlanetComponentProps {
    planet: Planet;
    onYesClicked?: () => void;
    onNoClicked?: () => void;
}

const Text = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const PromptContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 220px;
  
  font-size: 48px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const ChoiceContainer = styled.div`
  margin-top: 5px;
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
            <PromptContainer>
                Travel to {planet.name}?
                <ChoiceContainer className='flex justify-center gap-20'>
                    <Text onClick={yesClicked}>Yes</Text>
                    <Text onClick={noClicked}>No</Text>
                </ChoiceContainer>
            </PromptContainer>
        </>
    );
}

export default PlanetComponent;