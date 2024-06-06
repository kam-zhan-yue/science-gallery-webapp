import React, {ReactNode, useState} from 'react';

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

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [started, setStarted] = useState<boolean>(false);
    const [state, setState] = useState<GameState>(GameState.Menu);
    const [debug, setDebug] = useState<boolean>(false);

    const start = () => {
        setStarted(true);
    }

    return (
        <GameContext.Provider value={{started: started, state: state, start: start, setState: setState, debug: debug, setDebug: setDebug}}>
            {children}
        </GameContext.Provider>
    )
}