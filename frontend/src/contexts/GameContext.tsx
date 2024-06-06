import React, {ReactNode, useState} from 'react';
import styled from "styled-components";

export enum GameState {
    Menu,
    Mirror,
    Game,
}

export interface GameContextType {
    started: boolean;
    state: GameState;
    start: () => void;
    setState: (state: GameState) => void;
    debug: boolean;
    setDebug: (value: boolean) => void;
}

export const GameContext = React.createContext<GameContextType>({
    started: false,
    state: GameState.Menu,
    start: () => {console.log('this should not be printed')},
    setState: (state: GameState) => {console.log(`setting to state: ${state}`)},
    debug: false,
    setDebug: (value: boolean) => {console.log(`setting debug to ${value}`)},
});

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  touch-action: none; /* Disable touch events */
`;

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [started, setStarted] = useState<boolean>(false);
    const [state, setState] = useState<GameState>(GameState.Menu);
    const [debug, setDebug] = useState<boolean>(false);

    const start = () => {
        setStarted(true);
    }

    return (
        <>
            <Overlay></Overlay>
            <GameContext.Provider value={{started: started, state: state, start: start, setState: setState, debug: debug, setDebug: setDebug}}>
                {children}
            </GameContext.Provider>
        </>
    )
}