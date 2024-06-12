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
    inkState: string;
    setInkState: (value: string) => void;
}

export const GameContext = React.createContext<GameContextType>({
    started: false,
    state: GameState.Menu,
    start: () => {console.log('this should not be printed')},
    setState: (_state: GameState) => {},
    debug: false,
    setDebug: (_value: boolean) => {},
    inkState: '',
    setInkState: (_value: string) => {},
});

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [started, setStarted] = useState<boolean>(false);
    const [state, setState] = useState<GameState>(GameState.Menu);
    const [debug, setDebug] = useState<boolean>(false);
    const [inkState, setInkState] = useState<string>('');

    const start = () => {
        setStarted(true);
    }

    return (
        <>
            <GameContext.Provider value={
                {
                    started: started,
                    state: state,
                    start: start,
                    setState: setState,
                    debug: debug,
                    setDebug: setDebug,
                    inkState: inkState,
                    setInkState: setInkState,
                }
            }>
                {children}
            </GameContext.Provider>
        </>
    )
}