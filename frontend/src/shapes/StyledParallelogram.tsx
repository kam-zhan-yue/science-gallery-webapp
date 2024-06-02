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
        transform: translate(${startX}px, ${startY}px) skew(${skew}deg);
      }
      50% {
        transform: translate(${endX}px, ${endY}px) skew(${skew}deg);
      }
    `;
};
const move = (top: number, left: number, skew: number) => {
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

    // Return keyframes for transform translation
    return keyframes`
      10% {
        transform: translate(50px, 50px) skew(${skew}deg);
      }
      100% {
        transform: translate(${finalLeft}px, ${finalTop}px) skew(${skew}deg);
      }
  `;
};


export const StyledParallelogram = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: skew(${(props) => props.skew}deg);
  rotate: ${(props) => props.rotate}deg;
  background: ${(props) => props.background};
  animation: ${(props) =>
    props.move
        ? css`${move(props.top, props.left, props.skew)} 0.7s ease-in-out forwards`
        : css`${idle(props.skew)} 5s ease-in-out infinite`};
`;