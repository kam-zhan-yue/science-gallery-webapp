import React, {useState} from 'react';
import styled from "styled-components";
import StoryComponent from "./StoryComponent.tsx";
import main from "../assets/audio/main.mp3";
import Game from "../game/Game.tsx";
import P = Phaser.Input.Keyboard.KeyCodes.P;

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column; /* Display choices vertically */
  align-items: center; /* Center horizontally */
`

const StartButton = styled.button`
`

const Main: React.FC = () => {
    const [started, setStarted] = useState<boolean>(false);
    const [currentPlanet, setCurrentPlanet] = useState<string>('');

    const onStartClicked = () => {
        const audio = new Audio(main);
        audio.play();

        setStarted(true)
    }

    const goToPlanet = (planet:string) => {
        console.log("going to planet");
    }

    return (
        <>
            <Game/>
            {!started &&
                <>
                    <Overlay>
                        <StartButton onClick={onStartClicked}>
                            START
                        </StartButton>
                    </Overlay>
                </>}
            {started &&
                <StoryComponent
                    goToPlanet={goToPlanet}
            />}
        </>
    );
};

export default Main;