import React from "react";
import styled from "styled-components";
import Typewriter from "./Typewriter.tsx";

const Text = styled.div`
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  text-align: center;
  margin-left: 300px;
  margin-right: 300px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const prompts = [
  "AI: Where are we going next?",
  "AI: Select a planet.",
  "AI: So many places to go!",
  "AI: Let's see where life takes us."
]

const GuideComponent: React.FC<{prompt?: string}> = ({prompt}) => {
  function getRandomInt(max: integer) {
    return Math.floor(Math.random() * max);
  }

  function getRandomPrompt(): string{
    return prompts[getRandomInt(prompts.length)]
  }
  return (
      <>
          <Text>
            {prompt &&
              <Typewriter
                text={prompt}
                fontSize={20}
                delay={30}/>
            }
            {!prompt &&
                <Typewriter
                  text={getRandomPrompt()}
                  fontSize={26}
                  delay={30}/>
              }
          </Text>
      </>
  );
}

export default GuideComponent;
