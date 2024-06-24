import React from "react";
import {StyledCharacter, StyledTriangle} from "./StyledTriangle";

interface TriangleProps {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
    imageUrl?: string; // Optional prop for the image URL
}

const Triangle: React.FC<TriangleProps> = ({ top, left, bleft, bright, bbottom, rotate, background, imageUrl }) => {
    return (
        <>
            <StyledTriangle
                bleft={bleft}
                left={left}
                bbottom={bbottom}
                bright={bright}
                top={top}
                rotate={rotate}
                background={background}
                imageUrl='../../assets/characters/artist_fullbody.png' // Pass the image URL
                move={false}
            />
            <StyledCharacter
                bleft={bleft}
                left={left}
                bbottom={bbottom}
                bright={bright}
                top={top}
                rotate={rotate}
                background={background}
                imageUrl='../../assets/characters/artist_fullbody.png' // Pass the image URL
                move={false}
            />
        </>
    );
}

export default Triangle;
