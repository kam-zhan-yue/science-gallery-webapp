import React, {useEffect, useRef, useContext} from 'react';
import StoryComponent from "./StoryComponent.tsx";
import Game from "../game/Game.tsx";
import {Universe} from "../game/scenes/Universe.tsx";
import {GameContext, GameContextType, GameState} from "../contexts/GameContext.tsx";
import MenuComponent from "./MenuComponent.tsx";
import {StyleSheetManager} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { AnimatePresence } from 'framer-motion';
import AudioComponent from './AudioComponent.tsx';
import { BrowserRouter } from 'react-router-dom';

const Main: React.FC = () => {
    const universeRef = useRef<Universe>(null);
    const { state, setState, start} = useContext(GameContext) as GameContextType;

    useEffect(() => {
        if (universeRef.current) {
            console.log(`Universe is set ${universeRef.current}`); // You can now use the universeRef here
        }
    }, []);

    const startGame = () => {
        console.log(`start`)
        start();
        setState(GameState.Game);
    };

    // This implements the default behavior from styled-components v5
    function shouldForwardProp(propName: string, target: any) {
        if (typeof target === "string") {
            // For HTML elements, forward the prop if it is a valid HTML attribute
            return isPropValid(propName);
        }
        // For other elements, forward all props
        return true;
    }

    return (
        <>
          <BrowserRouter>
            <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <AnimatePresence>
              {(state == GameState.Menu || state == GameState.Mirror) &&
                  <MenuComponent startGame={startGame}/>
              }
            </AnimatePresence>
            <Game ref={universeRef}/>
            {state == GameState.Game &&
                <>
                    <StoryComponent
                        universeRef={universeRef.current}
                    />
                    <AudioComponent/>
                </>
            }
            </StyleSheetManager>
          </BrowserRouter>
        </>
    );
};

export default Main;
