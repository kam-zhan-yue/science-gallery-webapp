import React from "react";
import styled from "styled-components";

interface PlanetComponentProps {
    onYesClicked?: () => void;
    onNoClicked?: () => void;
}

const Overlay = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  min-height: 150px;
  max-height: 300px; /* Max height of the dialogue box */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 30px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 600px) {
    padding-right: 30px;
  }
`

const PlanetComponent: React.FC<PlanetComponentProps> = ({onYesClicked, onNoClicked}) => {
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
            <Overlay>
                <div onClick={yesClicked}>Yes</div>
                <div onClick={noClicked}>No</div>
            </Overlay>
        </>
    );
}

export default PlanetComponent;