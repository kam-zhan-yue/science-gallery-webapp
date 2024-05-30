import React from "react";
import {StyledTriangle} from "./StyledTriangle.tsx";

interface TriangleProps {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
}

const Triangle: React.FC<TriangleProps> = ({top, left, bleft, bright, bbottom, rotate, background}) => {
    return (
        <>
            <StyledTriangle bleft={bleft} left={left} bbottom={bbottom} bright={bright} top={top} rotate={rotate} background={background}/>
        </>
    );
}

export default Triangle;
