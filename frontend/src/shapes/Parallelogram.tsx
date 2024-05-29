import styled, {css, keyframes} from "styled-components";
import React, {useState} from "react";

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
        transform: translate(${endX}px, ${endY}px) skew(${skew});
      }
    `;
};

const Parallelogram: React.FC<ParallelogramProps> = ({ top, left, width, height, skew, rotate, background}) => {
    const [animate, setAnimate] = useState<boolean>(false);

    const startX = Math.floor(Math.random() * 5) + 5;
    const startY = Math.floor(Math.random() * 5) + 5;
    const endX = Math.floor(Math.random() * 5) - 15;
    const endY = Math.floor(Math.random() * 5) - 15;
    const animation = generateAnimation(startX, startY, endX, endY, skew);

    const moveRightAnimation = keyframes`
      from {
        left: ${left};
      }
      to {
        left: 100vw;
      }
    `;

    const ParallelogramDiv = styled.div<{ animate: boolean }>`
      position: absolute;
      top: ${top};
      left: ${left};
      width: ${width};
      height: ${height};
      transform: skew(${skew});
      rotate: ${rotate};
      background: ${background};
      animation: ${({ animate }) => animate ? css`${moveRightAnimation} 0.8s ease-in-out forwards` : css `${animation} 5s ease-in-out infinite`};
    `;

    const handleStart = () => {
        console.log('start');
        setAnimate(true);
    }

    return (
        <>
            <ParallelogramDiv animate={animate} onClick={handleStart}/>
        </>
    );
};

export default Parallelogram;
