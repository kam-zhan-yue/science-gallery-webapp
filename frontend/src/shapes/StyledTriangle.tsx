import styled, {keyframes} from 'styled-components';

interface Props {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
}

const generateAnimation = () => {
    const random = Math.floor(Math.random() * 5) + 5; // Random number between 5 and 10 for x-axis translation
    return keyframes`
    0%, 100% {
      transform: translateY(${random}px);
    }
    50% {
      transform: translateY(-${random}px);
    }
  `;
};

export const StyledTriangle = styled.div<Props>`
    padding: 5%;
    position: absolute;
    width: 0;
    height: 0;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    border-left: ${(props) => props.bleft}px solid transparent;
    border-right: ${(props) => props.bright}px solid transparent;
    border-bottom: ${(props) => props.bbottom}px solid ${(props) => props.background};
    rotate: ${(props) => props.rotate}deg;
    animation: ${generateAnimation()} 5s ease-in-out infinite;
`;