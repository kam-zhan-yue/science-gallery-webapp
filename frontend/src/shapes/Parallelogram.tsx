import React, {useContext} from "react";
import {StyledParallelogram} from "./StyledParallelogram.tsx";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";

interface ParallelogramProps {
    top: number;
    left: number;
    width: number;
    height: number;
    skew: number;
    rotate: number;
    background: string;
}


const Parallelogram: React.FC<ParallelogramProps> = ({ top, left, width, height, skew, rotate, background}) => {
    const { started } = useContext(GameContext) as GameContextType;

    return (
        <>
            <StyledParallelogram height={height} left={left} skew={skew} top={top} width={width} rotate={rotate} background={background} move={started}/>
        </>
    );
};

export default Parallelogram;
