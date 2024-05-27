import React from "react";
import styled from "styled-components";
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
  background: #2A2138;
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

const MirrorComponent: React.FC = () => {
    return (
        <>
            <Blocker/>
            <Overlay>
                <Parallelogram
                    top={"-180px"} left={"-75px"}
                    width={"125px"} height={"90px"}
                    skew={"50deg"} rotate={"50deg"}
                    background={"red"}/>
                <Parallelogram
                    top={"-110px"} left={"40px"}
                    width={"150px"} height={"90px"}
                    skew={"50deg"} rotate={"110deg"}
                    background={"gray"}/>
                <Parallelogram
                    top={"80px"} left={"-60px"}
                    width={"150px"} height={"100px"}
                    skew={"50deg"} rotate={"110deg"}
                    background={"white"}/>
                <Parallelogram
                    top={"-50px"} left={"-260px"}
                    width={"200px"} height={"80px"}
                    skew={"60deg"} rotate={"0deg"}
                    background={"blue"}/>
                <Triangle
                    down={"-210px"} right={"-150px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"250px"} rotate={"126deg"}
                    background={"green"}/>
                <Triangle
                    down={"-300px"} right={"-180px"}
                    bLeft={"75px"} bRight={"75px"}
                    bBottom={"150px"} rotate={"155deg"}
                    background={"yellow"}/>
                <Triangle
                    down={"0px"} right={"-240px"}
                    bLeft={"100px"} bRight={"100px"}
                    bBottom={"200px"} rotate={"63deg"}
                    background={"purple"}/>
                <Triangle
                    down={"100px"} right={"-175px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"300px"} rotate={"24deg"}
                    background={"pink"}/>
                <Triangle
                    down={"280px"} right={"-130px"}
                    bLeft={"50px"} bRight={"50px"}
                    bBottom={"150px"} rotate={"-10deg"}
                    background={"orange"}/>
                <Triangle
                    down={"200px"} right={"20px"}
                    bLeft={"40px"} bRight={"40px"}
                    bBottom={"200px"} rotate={"155deg"}
                    background={"cyan"}/>
                <Triangle
                    down={"20px"} right={"75px"}
                    bLeft={"60px"} bRight={"60px"}
                    bBottom={"175px"} rotate={"-140deg"}
                    background={"teal"}/>
                <Triangle
                    down={"-400px"} right={"10px"}
                    bLeft={"75px"} bRight={"75px"}
                    bBottom={"250px"} rotate={"-160deg"}
                    background={"fuchsia"}/>
            </Overlay>
        </>
    )
}

export default MirrorComponent;