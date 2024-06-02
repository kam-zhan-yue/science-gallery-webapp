import React, {useContext} from 'react';
import '../css/shapes.css';
import {GameContext, GameContextType} from "../contexts/GameContext.tsx"; // Import the CSS file

interface Props {
    top: number;
    left: number;
    width: number;
    height: number;
    skew: number;
    rotate: number;
    background: string;
}

const Parallelogram: React.FC<Props> = (props) => {
    const {
        top, left, width, height, skew, rotate, background,
    } = props;

    // Calculate the dynamic values for the animations
    const startX = `${Math.floor(Math.random() * 5) + 5}px`;
    const startY = `${Math.floor(Math.random() * 5) + 5}px`;
    const endX = `${Math.floor(Math.random() * 5) - 15}px`;
    const endY = `${Math.floor(Math.random() * 5) - 15}px`;

    const directionX = left + 60;
    const directionY = top;
    const magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
    const unitX = directionX / magnitude;
    const unitY = directionY / magnitude;
    const distance = 1000;
    const finalLeft = `${left + unitX * distance}px`;
    const finalTop = `${top + unitY * distance}px`;
    const { started } = useContext(GameContext) as GameContextType;

    return (
        <div
            className={`parallelogram ${started ? 'move' : 'idle'}`}
            style={{
                '--initialTop': `${top}px`,
                '--initialLeft': `${left}px`,
                '--finalTop': finalTop,
                '--finalLeft': finalLeft,
                '--startX': startX,
                '--startY': startY,
                '--endX': endX,
                '--endY': endY,
                '--width': `${width}px`,
                '--height': `${height}px`,
                '--skew': `${skew}deg`,
                '--rotate': `${rotate}deg`,
                '--background': background,
            } as React.CSSProperties}
        />
    );
};

export default Parallelogram;
