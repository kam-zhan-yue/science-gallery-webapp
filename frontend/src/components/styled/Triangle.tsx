import React, {useContext} from "react";
import {StyledTriangle} from "./StyledTriangle.tsx";
import {GameContext, GameContextType} from "../../contexts/GameContext.tsx";

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
    const { started } = useContext(GameContext) as GameContextType;

    return (
        <>
            <StyledTriangle bleft={bleft} left={left} bbottom={bbottom} bright={bright} top={top} rotate={rotate} background={background} move={started}/>
        </>
    );
}

export default Triangle;
