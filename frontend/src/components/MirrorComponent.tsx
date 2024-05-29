import React from "react";
import styled, {keyframes} from "styled-components";
import Parallelogram from "../shapes/Parallelogram.tsx";
import Triangle from "../shapes/Triangle.tsx";

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2A213899;
  //filter: blur(100px);
`

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const colors = {
    primary: '#E9E9EB44',
    secondary: '#BDBDC488'
}

// Define the keyframes for the rotation animation
const rotate = keyframes`
  to {
    --angle: 360deg;
  }
`;

// Create the styled component for the g-triangle
const GTriangle = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  background: conic-gradient(from var(--angle), hsl(162, 100%, 58%), hsl(270, 73%, 53%), hsl(162, 100%, 58%));
  animation: ${rotate} 3s infinite linear;
  clip-path: polygon(0 100%, 100% 100%, 50% 0);
`;

// Create the styled component for the container
const GContainer = styled.div`
  position: absolute;
  margin: auto;
  width: 260px;
  height: 260px;
  filter: drop-shadow(0 0 5px hsl(162, 100%, 58%)) drop-shadow(0 0 10px hsl(270, 73%, 53%));

  clip-path: polygon(0 100%, 100% 100%, 50% 0);
  mask:
          linear-gradient(117deg, #000 55%, transparent 55%, transparent),
          linear-gradient(-117deg, #000 55%, transparent 55%, transparent),
          linear-gradient(#000, #000);
  mask-position: 0 0, 130px 0, 0 250px;
  mask-size: 130px 250px, 130px 250px, 100% 10px;
  mask-repeat: no-repeat;
`;

const debug: boolean = false;

const MirrorComponent: React.FC = () => {
    return (
        <>
            <Blocker/>
            <Overlay>
                <GContainer>
                    <GTriangle />
                </GContainer>
                <Parallelogram
                    top={"-180px"} left={"-75px"}
                    width={"125px"} height={"90px"}
                    skew={"50deg"} rotate={"50deg"}
                    background={debug ? "red" : colors.primary}/>
                <Parallelogram
                    top={"-110px"} left={"40px"}
                    width={"150px"} height={"90px"}
                    skew={"50deg"} rotate={"110deg"}
                    background={debug ? "gray" : colors.secondary}/>
                <Parallelogram
                    top={"80px"} left={"-60px"}
                    width={"150px"} height={"100px"}
                    skew={"50deg"} rotate={"110deg"}
                    background={debug ? "white" : colors.primary}/>
                <Parallelogram
                    top={"-50px"} left={"-260px"}
                    width={"200px"} height={"80px"}
                    skew={"60deg"} rotate={"0deg"}
                    background={debug ? "blue" : colors.primary}/>
                <Triangle
                    down={"-210px"} right={"-150px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"250px"} rotate={"126deg"}
                    background={debug ? "green" : colors.secondary}/>
                <Triangle
                    down={"-300px"} right={"-180px"}
                    bLeft={"75px"} bRight={"75px"}
                    bBottom={"150px"} rotate={"155deg"}
                    background={debug ? "yellow" : colors.primary}/>
                <Triangle
                    down={"0px"} right={"-240px"}
                    bLeft={"100px"} bRight={"100px"}
                    bBottom={"200px"} rotate={"63deg"}
                    background={debug ? "purple" : colors.secondary}/>
                <Triangle
                    down={"100px"} right={"-175px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"300px"} rotate={"24deg"}
                    background={debug ? "pink" : colors.primary}/>
                <Triangle
                    down={"280px"} right={"-130px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"150px"} rotate={"-10deg"}
                    background={debug ? "orange" : colors.secondary}/>
                <Triangle
                    down={"200px"} right={"20px"}
                    bLeft={"40px"} bRight={"40px"}
                    bBottom={"200px"} rotate={"155deg"}
                    background={debug ? "cyan" : colors.secondary}/>
                <Triangle
                    down={"20px"} right={"75px"}
                    bLeft={"60px"} bRight={"60px"}
                    bBottom={"175px"} rotate={"-140deg"}
                    background={debug ? "teal" : colors.secondary}/>
                <Triangle
                    down={"-400px"} right={"10px"}
                    bLeft={"75px"} bRight={"75px"}
                    bBottom={"250px"} rotate={"-160deg"}
                    background={debug ? "fuchsia" : colors.primary}/>
            </Overlay>
        </>
    )
}

export default MirrorComponent;