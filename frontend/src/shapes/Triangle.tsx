import React from "react";
import styled, {keyframes} from "styled-components";

interface TriangleProps {
    top: number;
    left: number;
    bLeft: number;
    bRight: number;
    bBottom: number;
    rotate: number;
    background: string;
}

const Triangle: React.FC<TriangleProps> = ({top, left, bLeft, bRight, bBottom, rotate, background}) => {
    const random = Math.floor(Math.random() * 5) + 5; // Random number between 5 and 10 for x-axis translation

    const animation = keyframes`
      0%, 100% {
        transform: translateY(${random}px);
      }
      50% {
        transform: translateY(-${random}px);
      }
    `;

    const TriangleDiv = styled.div`
      position: absolute;
      width: 0;
      height: 0;
      top: ${top}px;
      left: ${left}px;
      border-left: ${bLeft}px solid transparent;
      border-right: ${bRight}px solid transparent;
      border-bottom: ${bBottom}px solid ${background};
      rotate: ${rotate}deg;
      animation: ${animation} 5s ease-in-out infinite;

    `;

    return (
        <>
            <TriangleDiv/>
        </>
    );
}

export default Triangle;
