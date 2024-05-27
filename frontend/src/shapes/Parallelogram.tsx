import styled, {keyframes} from "styled-components";
import React from "react";
import {Keyframes} from "styled-components/dist/types";

interface ParallelogramProps {
    top: string;
    left: string;
    width: string;
    height: string;
    skew: string;
    rotate: string;
    background: string;
}

// Define keyframes outside the component to ensure each instance gets its own animation
const generateAnimation = (startX: number, startY: number, endX: number, endY: number, skew: string) => {
    return keyframes`
    0%, 100% {
      transform: translate(${startX}px, ${startY}px) skew(${skew});
    }
    50% {
      transform: translate(${-endX}px, ${-endY}px) skew(${skew});
    }
  `;
};

const Animation = keyframes<{startX: number, startY: number, endX: number, endY: number, skew: string}>`
    0%, 100% {
      transform: translate(${({ startX = 0 }) => startX}px, ${({ startY = 0 }) => startY}px) skew(${({ skew = '' }) => skew});
    }
    50% {
      transform: translate(${({ endX = 0 }) => -endX}px, ${({ endY = 0 }) => -endY}px) skew(${({ skew = '' }) => skew});
    }
`

const StyledParallelogram = styled.div<{top: string, left: string, width: string, height: string, skew: string, rotate: string, background: string, delay: number}>`
      position: absolute;
      top: ${({ top = '' }) => top};
      left: ${({ left = '' }) => left};
      width: ${({ width = '' }) => width};
      height: ${({ height = '' }) => height};
      transform: skew(${({ skew = '' }) => skew});
      rotate: ${({ rotate = '' }) => rotate};
      background: ${({ background = '' }) => background};
      animation-delay: ${({ delay = 0 }) => delay} s;
`;

const Parallelogram: React.FC<ParallelogramProps> = ({top, left, width, height, skew, rotate, background}) => {
    const startX: number = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10 for x-axis translation
    const startY: number = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10 for x-axis translation
    const endX: number = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10 for x-axis translation
    const endY: number = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10 for y-axis translation
    const delay: number = Math.random() * 5;

    return (
        <>
            <StyledParallelogram
                top={top}
                left={left}
                width={width}
                height={height}
                skew={skew}
                rotate={rotate}
                background={background}
                delay={delay}
            />
        </>
    )
}

export default Parallelogram;
