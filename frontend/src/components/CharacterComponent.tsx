import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import Player from "../classes/Player.ts";

const Class = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const StatHolder = styled.div`
  margin-top: 50px;
  position: fixed;
  top: 40px;
  left: 20px;
  display: flex;
  flex-direction: column;
`

const CharacterHolder = styled.img`
  width: 266px;
  height: 64px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  &:hover {
    cursor: pointer;
  }
`
// Define the fade-in keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Apply the fade-in animation with a staggered delay
const Tab = styled.img<{ delay: number }>`
  width: 64px;
  height: 64px;
  margin-bottom: 6px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  opacity: 0; /* Initial opacity for animation */
  animation: ${({ delay }) => css`
    ${fadeIn} 0.5s ease-in-out ${delay}s forwards
  `};
  &:hover {
    cursor: pointer;
  }
`;

interface PlayerComponentProps {
    player: Player;
}

const PlayerComponent: React.FC<PlayerComponentProps> = ({player}) => {
    const [show, setShow] = useState<boolean>(false);
    const [tab, setTab] = useState<string>('');

    const handlePlayerClicked = () => {
        console.log(`player clicked ${player.class}`)
        setShow(!show);
        if(!show) {
            setTab('');
        }
    }

    const handleTabClicked = (selectedTab: string) => {
        if(selectedTab === tab) {
            setTab('');
        } else {
            setTab(selectedTab);
        }
    }

    return (
        <>
            <Class>
                <CharacterHolder
                    key={'character-holder'}
                    id={'character-holder'}
                    src={'./ui/character-holder.png'}
                    alt={'character-holder'}
                    onClick={handlePlayerClicked}
                />
            </Class>
            {show &&
                <>
                    <StatHolder>
                        {["inventory", "skill", "ability"].map((tabId, index) => (
                            <Tab
                                key={tabId}
                                id={tabId}
                                src={
                                    tab === tabId
                                        ? `./ui/${tabId}-inactive.png`
                                        : `./ui/${tabId}-active.png`
                                }
                                alt={tabId}
                                onClick={() => handleTabClicked(tabId)}
                                delay={index * 0.1} // Staggered delay
                            />
                        ))}
                    </StatHolder>
                </>
            }
        </>
    )
}

export default PlayerComponent

