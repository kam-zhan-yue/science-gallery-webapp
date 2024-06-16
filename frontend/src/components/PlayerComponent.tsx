import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import Player from "../classes/Player.ts";
import SubPopupComponent from "./SubPopupComponent.tsx";

const StatHolder = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;

  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

const CharacterHolder = styled.img`
  width: 333px;
  height: 80px;
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
  width: 80px;
  height: 80px;
  margin-top: 6px;
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
    onUseItem: (key: string) => void;
}

const PlayerComponent: React.FC<PlayerComponentProps> = ({player, onUseItem}) => {
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

    const closeTab = () => {
        setTab('');
    }

    return (
        <>
            {player.class !== '' &&
                <StatHolder>
                    <CharacterHolder
                        key={'character-holder'}
                        id={'character-holder'}
                        src={'../assets/ui/character-holder.png'}
                        alt={'character-holder'}
                        onClick={handlePlayerClicked}
                    />
                    {show &&
                        <>
                            {["inventory", "stats", "skill"].map((tabId, index) => (
                                <Tab
                                    key={tabId}
                                    id={tabId}
                                    src={
                                        tab === tabId
                                            ? `../assets/ui/${tabId}-inactive.png`
                                            : `../assets/ui/${tabId}-active.png`
                                    }
                                    alt={tabId}
                                    onClick={() => handleTabClicked(tabId)}
                                    delay={index * 0.1} // Staggered delay
                                />
                            ))}
                            {tab !== '' &&
                                <>
                                    <SubPopupComponent tab={tab} player={player} onUseItem={onUseItem} onCloseButton={closeTab}/>
                                </>
                            }
                        </>
                    }
            </StatHolder>
            }
        </>
    )
}

export default PlayerComponent

