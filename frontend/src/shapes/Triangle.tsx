import React from "react";
import styled, {keyframes} from "styled-components";

interface TriangleProps {
    down: string;
    right: string;
    bLeft: string;
    bRight: string;
    bBottom: string;
    rotate: string;
    background: string;
}

const Triangle: React.FC<TriangleProps> = ({down, right, bLeft, bRight, bBottom, rotate, background}) => {
    const animation = keyframes`
      0%, 100% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(-10px);
      }
    `;

    const TriangleDiv = styled.div`
      position: absolute;
      width: 0;
      height: 0;
      top: ${down};
      left: ${right};
      border-left: ${bLeft} solid transparent;
      border-right: ${bRight} solid transparent;
      border-bottom: ${bBottom} solid ${background};
      rotate: ${rotate};
      animation: ${animation} 5s ease-in-out infinite;
      //filter: blur(4.5px)
    `;
    return (
        <TriangleDiv/>
    );
}

export default Triangle;
