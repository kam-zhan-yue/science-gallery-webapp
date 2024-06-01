import React, {useEffect, useRef, useContext} from 'react';
import styled from "styled-components";
import StoryComponent from "./StoryComponent.tsx";
import Game from "../game/Game.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import MirrorComponent from "./MirrorComponent.tsx";
import {GameContext, GameContextType, GameState} from "../contexts/GameContext.tsx";

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
    const { started, state, setState, start } = useContext(GameContext) as GameContextType;

    // Add a console.log statement to check the value of state
    console.log("State:", state);

    useEffect(() => {
        if (universeRef.current) {
            console.log(`Universe is set ${universeRef.current}`); // You can now use the universeRef here
            universeRef.current?.test();
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', startGame, true);
        return () => {
            document.body.removeEventListener('click', startGame, true);
        };
    }, [started]); // Empty dependency array ensures this effect runs only once on mount

    const startGame = () => {
        console.log(`2 started is ${started}`);
        if(!started) {
            start();
            setState(GameState.Mirror);
            setTimeout(() => {
                setState(GameState.Game);
            }, 700); // Delay execution by one second (1000 milliseconds)
        }
    };

    return (
        <>
            {(state == GameState.Menu || state == GameState.Mirror) &&
                <MirrorComponent/>
            }
            <Game ref={universeRef}/>
            {state == GameState.Game &&
                <>
                    <StoryComponent
                        universeRef={universeRef.current}
                    />
                </>
            }
        </>
    );
};

export default Main;