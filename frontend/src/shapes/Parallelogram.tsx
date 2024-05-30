import styled, {css, keyframes, RuleSet} from "styled-components";
import React, {useState} from "react";
import {Keyframes} from "styled-components/dist/types";

interface ParallelogramProps {
    top: number;
    left: number;
    width: number;
    height: number;
    skew: number;
    rotate: number;
    background: string;
}

// Define keyframes outside the component to ensure each instance gets its own animation
const generateAnimation = (startX: number, startY: number, endX: number, endY: number, skew: number) => {
    return keyframes`
      0%, 100% {
        transform: translate(${startX}px, ${startY}px) skew(${skew}deg);
      }
      50% {
        transform: translate(${endX}px, ${endY}px) skew(${skew}deg);
      }
    `;
};

const StyledParallelogram = styled.div<{ top: number, left: number, width: number, height: number, rotate: number, skew: number, background: string, animate: boolean, move: string, idle: string}>`
      position: absolute;
      top: ${({ top = 0 }) => top}px;
      left: ${({ left = 0 }) => left}px;
      width: ${({ width = 0 }) => width}px;
      height: ${({ height = 0 }) => height}px;
      transform: skew(${({ skew = 0 }) => skew}deg);
      rotate: ${({ rotate = 0 }) => rotate}deg;
      background: ${({ background = '' }) => background};
      animation: ${({ animate = false, move, idle }) =>
              animate
                      ? css`${move} 0.8s ease-in-out forwards`
                      : css`${idle} 5s ease-in-out infinite`};
`;

const Parallelogram: React.FC<ParallelogramProps> = ({ top, left, width, height, skew, rotate, background}) => {
    const [animate, setAnimate] = useState<boolean>(false);

    const startX = Math.floor(Math.random() * 5) + 5;
    const startY = Math.floor(Math.random() * 5) + 5;
    const endX = Math.floor(Math.random() * 5) - 15;
    const endY = Math.floor(Math.random() * 5) - 15;
    const animation = generateAnimation(startX, startY, endX, endY, skew);

    const moveKeyframes = keyframes`
      from {
        left: ${left};
      }
      to {
        left: 100vw;
      }
    `;
    const idleString = () => css`${animation}`;
    const moveString = () => css`${moveKeyframes}`;

    return (
        <>
            {/*<ParallelogramDiv animate={animate} onClick={handleStart}/>*/}
            <StyledParallelogram
                top={top} left={left}
                width={width} height={height}
                skew={skew} rotate={rotate}
                background={background} animate={animate}
                move={moveString.toString()} idle={idleString.toString()}/>
        </>
    );
};

export default Parallelogram;
