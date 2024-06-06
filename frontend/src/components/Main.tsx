import React, {useEffect, useRef, useContext} from 'react';
import StoryComponent from "./StoryComponent.tsx";
import Game from "../game/Game.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import MirrorComponent from "./MirrorComponent.tsx";
import {GameContext, GameContextType, GameState} from "../contexts/GameContext.tsx";

const Main: React.FC = () => {
    const universeRef = useRef<Universe>(null);
    const { started, state, setState, start, debug, setDebug} = useContext(GameContext) as GameContextType;

    useEffect(()=> {
        setDebug(true);
        if(debug) {
            start();
            setTimeout(() => {
                setState(GameState.Game);
            }, 100); // Delay execution by one second (1000 milliseconds)
        }
    });

    useEffect(() => {
        if (universeRef.current) {
            console.log(`Universe is set ${universeRef.current}`); // You can now use the universeRef here
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', startGame, true);
        return () => {
            document.body.removeEventListener('click', startGame, true);
        };
    }, [started]); // Empty dependency array ensures this effect runs only once on mount

    const startGame = () => {
        if(!started) {
            start();
            setState(GameState.Mirror);
            setTimeout(() => {
                setState(GameState.Game);
            }, 1000); // Delay execution by one second (1000 milliseconds)
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