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

const MainGlow = styled.div`
  position: absolute;
  margin: auto;
  width: 0;
  height: 0;
  filter: drop-shadow(0 0 20px hsl(270, 100%, 58%, 60%)) drop-shadow(0 0 30px hsl(280, 73%, 53%, 60%));
`;

const SubGlow = styled.div`
  position: absolute;
  margin: auto;
  width: 0;
  height: 0;
  filter: drop-shadow(0 0 20px hsl(162, 100%, 58%, 80%)) drop-shadow(0 0 30px hsl(270, 73%, 53%, 90%));
`

const debug: boolean = false;

const MirrorComponent: React.FC = () => {
    return (
        <>
            <Blocker/>
            <Overlay>
                <MainGlow>
                    <SubGlow>
                        <Parallelogram
                            top={-180} left={-75}
                            width={125} height={90}
                            skew={50} rotate={50}
                            background={debug ? "red" : colors.primary}/>
                        <Parallelogram
                            top={-110} left={40}
                            width={150} height={90}
                            skew={50} rotate={110}
                            background={debug ? "gray" : colors.secondary}/>
                        <Parallelogram
                            top={80} left={-60}
                            width={150} height={100}
                            skew={50} rotate={110}
                            background={debug ? "white" : colors.primary}/>
                        <Parallelogram
                            top={-50} left={-260}
                            width={200} height={80}
                            skew={60} rotate={0}
                            background={debug ? "blue" : colors.primary}/>
                        <Triangle
                            top={-210} left={-150}
                            bleft={50} bright={50}
                            bbottom={250} rotate={126}
                            background={debug ? "green" : colors.secondary}/>
                        <Triangle
                            top={-300} left={-180}
                            bleft={75} bright={75}
                            bbottom={150} rotate={155}
                            background={debug ? "yellow" : colors.primary}/>
                        <Triangle
                            top={0} left={-240}
                            bleft={100} bright={100}
                            bbottom={200} rotate={63}
                            background={debug ? "purple" : colors.secondary}/>
                        <Triangle
                            top={100} left={-175}
                            bleft={50} bright={50}
                            bbottom={300} rotate={24}
                            background={debug ? "pink" : colors.primary}/>
                        <Triangle
                            top={280} left={-130}
                            bleft={50} bright={50}
                            bbottom={150} rotate={-10}
                            background={debug ? "orange" : colors.secondary}/>
                        <Triangle
                            top={200} left={20}
                            bleft={40} bright={40}
                            bbottom={200} rotate={155}
                            background={debug ? "cyan" : colors.secondary}/>
                        <Triangle
                            top={20} left={75}
                            bleft={60} bright={60}
                            bbottom={175} rotate={-140}
                            background={debug ? "teal" : colors.secondary}/>
                        <Triangle
                            top={-400} left={10}
                            bleft={75} bright={75}
                            bbottom={250} rotate={-160}
                            background={debug ? "fuchsia" : colors.primary}/>
                    </SubGlow>
                </MainGlow>
            </Overlay>
        </>
    )
}

export default MirrorComponent;