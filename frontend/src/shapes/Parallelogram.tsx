import React, {useState} from "react";
import {StyledParallelogram} from "./StyledParallelogram.tsx";

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
    const [move, setMove] = useState<boolean>(false);

    const onClick = () => {
        setMove(true);
    }

    return (
        <>
            <StyledParallelogram height={height} left={left} skew={skew} top={top} width={width} rotate={rotate} background={background} move={move} onClick={onClick}/>
        </>
    );
};

export default Parallelogram;
