import React from "react";
import {StyledCharacter, StyledTriangle} from "./StyledTriangle";
// import {characters} from "../../setup/Character.ts";

interface TriangleProps {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
    character?: string;
}

const Triangle: React.FC<TriangleProps> = ({ top, left, bleft, bright, bbottom, rotate, background }) => {
    // const getImage = (): string => {
    //     if(!character) return '';
    //     if(character in characters) {
    //         return characters[character].fullBody;
    //     }
    // }
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
