import styled, {css, keyframes} from 'styled-components';

interface Props {
    top: number;
    left: number;
    bleft: number;
    bright: number;
    bbottom: number;
    rotate: number;
    background: string;
    move: boolean;
}

const idle = () => {
    const random = Math.floor(Math.random() * 5) + 5; // Random number between 5 and 10 for x-axis translation
    return keyframes`
    0%, 100% {
      transform: translateY(${random}px) translateZ(0);
    }
    50% {
      transform: translateY(-${random}px) translateZ(0);
    }
  `;
};

const move = (top: number, left: number, rotate: number) => {
    // Calculate direction vectors
    const directionX = left;
    const directionY = top;

    // Normalize the direction vectors
    const magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
    const unitX = directionX / magnitude;
    const unitY = directionY / magnitude;

    // Set the distance to move, adjust based on your needs
    const distance = 1000;

    // Calculate the final positions
    const finalLeft = left + unitX * distance;
    const finalTop = top + unitY * distance;

    // Take out the rotation from the equation, hence the -1
    const rotateRadians: number = (rotate * Math.PI) / 180 * -1;

    // Define the movement vector in the unrotated coordinate system
    const x: number = finalLeft;
    const y: number = finalTop;

    // Adjust the movement vector for rotation
    const adjustedX: number = x * Math.cos(rotateRadians) - y * Math.sin(rotateRadians);
    const adjustedY: number = x * Math.sin(rotateRadians) + y * Math.cos(rotateRadians);
    // Adjust the movement vector for rotation
    const adjustedInX: number = adjustedX * -0.01;
    const adjustedInY: number = adjustedY * -0.01;

    // Return keyframes for transform translation
    return keyframes`
      50% {
        transform: translate3d(${adjustedInX}px, ${adjustedInY}px, 0);
      }
      100% {
        transform: translate3d(${adjustedX}px, ${adjustedY}px, 0);
      }
    `;
}

export const StyledTriangle = styled.div<Props>`
    position: absolute;
    width: 0;
    height: 0;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    transform: translateZ(0);
    border-left: ${(props) => props.bleft}px solid transparent;
    border-right: ${(props) => props.bright}px solid transparent;
    border-bottom: ${(props) => props.bbottom}px solid ${(props) => props.background};
    rotate: ${(props) => props.rotate}deg;
    //-webkit-filter: drop-shadow(0 0 10px hsl(162, 100%, 58%, 80%))drop-shadow(0 0 20px hsl(270, 100%, 58%, 60%)) drop-shadow(0 0 30px hsl(280, 73%, 53%, 60%));
    //filter: drop-shadow(0 0 10px hsl(162, 100%, 58%, 80%))drop-shadow(0 0 20px hsl(270, 100%, 58%, 60%)) drop-shadow(0 0 30px hsl(280, 73%, 53%, 60%));
    animation: ${(props) =>
          props.move
                  ? css`${move(props.top, props.left, props.rotate)} 0.7s ease-in-out forwards`
                  : css`${idle()} 5s ease-in-out infinite`};
`;