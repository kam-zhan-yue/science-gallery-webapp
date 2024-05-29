import React from "react";
import styled, {keyframes} from "styled-components";

interface TriangleProps {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
}
const random = Math.floor(Math.random() * 5) + 5; // Random number between 5 and 10 for x-axis translation

const animation = keyframes`
  0%, 100% {
    transform: translateY(${random}px);
  }
  50% {
    transform: translateY(-${random}px);
  }
`;

const StyledTriangle = styled.div<{ top: number, left: number, bleft: number, bright: number, bbottom: number, rotate: number, background: string}>`
  position: absolute;
  width: 0;
  height: 0;
  top: ${({ top = 0 }) => top}px;
  left:  ${({ left = 0 }) => left}px;
  border-left: ${({bleft = 0}) => bleft}px solid transparent;
  border-right: ${({bright = 0}) => bright}px solid transparent;
  border-bottom: ${({bbottom = 0}) => bbottom}px solid ${({background = ''}) => background};
  rotate: ${({rotate= 0}) => rotate}deg;
  animation: ${animation} 5s ease-in-out infinite;
`;

const Triangle: React.FC<TriangleProps> = ({top, left, bleft, bright, bbottom, rotate, background}) => {
    return (
        <>
            <StyledTriangle bleft={bleft} left={left} bbottom={bbottom} bright={bright} top={top} rotate={rotate} background={background}/>
        </>
    );
}

export default Triangle;
