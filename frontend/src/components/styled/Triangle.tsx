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
    character?: string;
    selectCharacter?: (character: string) => void,
}

const Triangle: React.FC<TriangleProps> = ({ top, left, bleft, bright, bbottom, rotate, background, character, selectCharacter }) => {
    const getImage = (): string => {
        if(!character) return '';
        if(character == 'Artist') {
            return '../../assets/characters/artist_rotated.png';
        } else if(character == 'Doctor') {
            return '../../assets/characters/doctor_rotated.png';
        } else if(character == 'Mechanic') {
            return '../../assets/characters/mechanic_rotated.png';
        }
        return '';
    }

    const handleClick = () => {
        if(selectCharacter && character)
            selectCharacter(character)
    }

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
                move={false}
                onClick={()=>{console.log('clicked')}}>
            </StyledTriangle>
            {getImage() != '' &&
                <>
                    <StyledCharacter
                        layoutId={character}
                        bleft={bleft}
                        left={left}
                        bbottom={bbottom}
                        bright={bright}
                        top={top}
                        rotate={rotate}
                        background={background}
                        imageUrl={getImage()}
                        move={false}
                        onClick={handleClick}
                    />
                </>
            }
        </>
    );
}

export default Triangle;
