import React from "react";
import styled from "styled-components";
import Typewriter from "./Typewriter.tsx";

const InputBlocker = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  touch-action: none;
`

const Text = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 36px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  text-align: center;
`

const prompts = [
  "AI: Where are we going next?",
  "AI: Select a planet.",
  "AI: So many places to go!",
  "AI: Let's see where life takes us."
]

const GuideComponent: React.FC = () => {
  function getRandomInt(max: integer) {
    return Math.floor(Math.random() * max);
  }

  function getRandomPrompt(): string{
    return prompts[getRandomInt(prompts.length)]
  }
  return (
      <>
          <InputBlocker/>
          <Text>
            <Typewriter
              text={getRandomPrompt()}
              fontSize={32}
              delay={30}/>
          </Text>
      </>
  );
}

export default GuideComponent;
