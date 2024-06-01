import React, {ReactNode, useState} from 'react';

interface GameContextType {
    started: boolean;
    start: () => void;
}

export const GameContext = React.createContext<GameContextType>({
   started: false,
   start: () => {},
});

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [started, setStarted] = useState(false);

    const start = () => {
        setStarted(true);
        console.log("started");
    }

    return (
        <GameContext.Provider value={{started: started, start}}>
            {children}
        </GameContext.Provider>
    )
}