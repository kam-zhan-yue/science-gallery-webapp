import styled, {css, keyframes} from 'styled-components';

interface Props {
    top: number;
    left: number;
    width: number;
    height: number;
    skew: number;
    rotate: number;
    background: string;
    move: boolean;
}

// Define keyframes outside the component to ensure each instance gets its own animation
const idle = (skew: number) => {
    const startX = Math.floor(Math.random() * 5) + 5;
    const startY = Math.floor(Math.random() * 5) + 5;
    const endX = Math.floor(Math.random() * 5) - 15;
    const endY = Math.floor(Math.random() * 5) - 15;
    return keyframes`
      0%, 100% {
        transform: translate3d(${startX}px, ${startY}px, 0) skew(${skew}deg);
      }
      50% {
        transform: translate3d(${endX}px, ${endY}px, 0) skew(${skew}deg);
      }
    `;
};
const move = (top: number, left: number, skew: number, rotate: number) => {
    // Calculate direction vectors
    const directionX = left+100;
    const directionY = top;

    // Normalize the direction vectors
    const magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
    const unitX = directionX / magnitude;
    const unitY = directionY / magnitude;

    // Set the distance to move, adjust based on your needs
    const distance: number = 1000;

    // Calculate the final positions
    const finalLeft: number = left + unitX * distance;
    const finalTop: number = top + unitY * distance;

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
      0% {
        transform: translate3d(0, 0, 0) skew(${skew}deg);
      }
      50% {
        transform: translate3d(${adjustedInX}px, ${adjustedInY}px, 0) skew(${skew}deg);
      }
      100% {
        transform: translate3d(${adjustedX}px, ${adjustedY}px, 0) skew(${skew}deg);
      }
  `;
};


export const StyledParallelogram = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: skew(${(props) => props.skew}deg) translateZ(0);;
  rotate: ${(props) => props.rotate}deg;
  background: ${(props) => props.background};
  //-webkit-filter: drop-shadow(0 0 10px hsl(162, 100%, 58%, 80%))drop-shadow(0 0 20px hsl(270, 100%, 58%, 60%)) drop-shadow(0 0 30px hsl(280, 73%, 53%, 60%));
  //filter: drop-shadow(0 0 10px hsl(162, 100%, 58%, 80%)) drop-shadow(0 0 20px hsl(270, 100%, 58%, 60%)) drop-shadow(0 0 30px hsl(280, 73%, 53%, 60%));
  animation: ${(props) =>
    props.move
        ? css`${move(props.top, props.left, props.skew, props.rotate)} 0.7s ease-in-out forwards`
        : css`${idle(props.skew)} 5s ease-in-out infinite`};
`;