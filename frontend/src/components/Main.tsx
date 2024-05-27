import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import StoryComponent from "./StoryComponent.tsx";
import main from "../assets/audio/main.mp3";
import Game from "../game/Game.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import MirrorComponent from "./MirrorComponent.tsx";

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
    const universeRef = useRef<Universe>(null);

    useEffect(() => {
        if (universeRef.current) {
            console.log(`Universe is set ${universeRef.current}`); // You can now use the universeRef here
            universeRef.current?.test();
        }
    }, []);

    const onStartClicked = () => {
        const audio = new Audio(main);
        audio.play();

        setStarted(true)
    }


    return (
        <>
            {!started &&
                <>
                    <Overlay>
                        <StartButton onClick={onStartClicked}>
                            START
                        </StartButton>
                    </Overlay>
                    <MirrorComponent/>
                </>}
            {started &&
                <>
                    <Game ref={universeRef}/>
                    <StoryComponent
                        universeRef={universeRef.current}
                    />
                </>
            }
        </>
    );
};

export default Main;