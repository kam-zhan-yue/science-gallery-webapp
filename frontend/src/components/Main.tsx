import React, {useEffect, useRef, useContext} from 'react';
import styled from "styled-components";
import StoryComponent from "./StoryComponent.tsx";
import main from "../assets/audio/main.mp3";
import Game from "../game/Game.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import MirrorComponent from "./MirrorComponent.tsx";
import {GameContext, GameProvider} from "../contexts/GameContext.tsx";

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
    const universeRef = useRef<Universe>(null);
    const { started, start } = useContext(GameContext);

    useEffect(() => {
        if (universeRef.current) {
            console.log(`Universe is set ${universeRef.current}`); // You can now use the universeRef here
            universeRef.current?.test();
        }
    }, []);

    const onStartClicked = () => {
        const audio = new Audio(main);
        audio.play();
        start();
    }


    return (
        <>
            <GameProvider>
                <Game ref={universeRef}/>
                {!started &&
                    <>
                        <MirrorComponent/>
                        <Overlay>
                            <StartButton onClick={onStartClicked}>
                                START
                            </StartButton>
                        </Overlay>
                    </>}
                {started &&
                    <>
                        <StoryComponent
                            universeRef={universeRef.current}
                        />
                    </>
                }
            </GameProvider>
        </>
    );
};

export default Main;