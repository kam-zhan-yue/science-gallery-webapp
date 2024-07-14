import React from "react";
import styled from "styled-components";
import Planet from "../classes/Planet.ts";
import {planets} from "../setup/PlanetData.ts";
import {colours} from "./styled/Constants.tsx";
import {TextStyle} from "./styled/Text.tsx";

interface PlanetComponentProps {
    planet: Planet;
    onYesClicked?: () => void;
    onNoClicked?: () => void;
}

const PromptContainer = styled.div`
  position: fixed;
  top: 70%;

  display: flex;
  flex-direction: column;
  width: 90%;

  font-size: 36px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`

const ChoiceContainer = styled.div`
  margin-top: 5px;
`

const Text = styled(TextStyle)`
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  transition: 0.3s all;
  -webkit-transition: 0.3s all;

  &:hover {
    cursor: pointer;
    color: ${colours.primary};
  }
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
                Travel to {planets[planet.name].name}?
                <ChoiceContainer className='flex justify-center gap-20'>
                    <Text onClick={yesClicked}>Yes</Text>
                    <Text onClick={noClicked}>No</Text>
                </ChoiceContainer>
            </PromptContainer>
        </>
    );
}

export default PlanetComponent;
