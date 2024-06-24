import { useState, useImperativeHandle, forwardRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Player from "../../classes/Player.ts";
import SubPopupComponent from "../SubPopupComponent.tsx";
import {characters} from "../../setup/Character.ts";

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
`;

const CharacterContainer = styled.div`
  width: 333px;
  height: 87px;
  :hover {
    cursor: pointer;
  }
`

const BaseStatBar = styled.img`
  position: fixed;
  width: 333px;
  height: 87px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`;

const Title = styled.img`
  position: fixed;
  left: 105px;
  top: 22px;
  height: 18px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

const Profile = styled.img`
  position: fixed;
  top: 27px;
  left: 28px;
  height: 67px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

const HealthBar = styled.img`
  position: fixed;
  left: 106px;
  top: 52px;
  width: 200px;
  height: 20px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

const ProgressBar = styled.img`
  position: fixed;
  left: 242px;
  top: 83.3px;
  width: 101px;
  height: 17px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
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

export interface PlayerComponentHandle {
    openInventory: () => void;
}

const PlayerComponent = forwardRef<PlayerComponentHandle, PlayerComponentProps>(({ player, onUseItem }, ref) => {
    const [show, setShow] = useState<boolean>(false);
    const [tab, setTab] = useState<string>("");

    const openInventory = () => {
        setShow(true);
        setTab("inventory");
    };

    useImperativeHandle(ref, () => ({
        openInventory,
    }));

    const handlePlayerClicked = () => {
        console.log(`player clicked ${player.class}`);
        setShow(!show);
        if (!show) {
            setTab("");
        }
    };

    const handleTabClicked = (selectedTab: string) => {
        if (selectedTab === tab) {
            setTab("");
        } else {
            setTab(selectedTab);
        }
    };

    const closeTab = () => {
        setTab("");
    };

    const prefix: string = "../../assets/ui/";

    const titleUrl = (): string => {
        if(player.class in characters) {
            return prefix+characters[player.class].title;
        } else {
            return prefix + `title-${player.class}.png`;
        }
    }

    const profileUrl = (): string => {
        if(player.class in characters) {
            return prefix+characters[player.class].thumbnail;
        } else {
            return prefix + `thumbnail-${player.class}.png`;
        }
    }

    const progressUrl = (): string => {
        let index = Math.min(Math.max(player.progress, 0), 5);
        console.log(prefix + `progress-${index}.png`);
        return prefix + `progress-${index}.png`;
    }

    return (
        <>
            {player.class !== "" && (
                <>
                    <StatHolder>
                        <CharacterContainer
                            onClick={handlePlayerClicked}>
                            <BaseStatBar
                                key={"base-stat-bar"}
                                id={"base-stat-bar"}
                                alt={"base-stat-bar"}
                                src={"../assets/ui/base-stat-bar.png"}
                            />

                            <Title
                                key={player.class}
                                id={player.class}
                                alt={player.class}
                                src={titleUrl()}
                            />

                            <Profile
                                key='profile'
                                id='profile'
                                alt='profile'
                                src={profileUrl()}
                            />

                            <HealthBar
                                key={"health"}
                                id={"health"}
                                alt={"health"}
                                src={"../assets/ui/health-8.png"}
                            />
                            <ProgressBar
                                key={"progress"}
                                id={"progress"}
                                alt={"progress"}
                                src={progressUrl()}
                            />
                        </CharacterContainer>

                        {show && (
                            <>
                                {["inventory", "stats", "shard"].map((tabId, index) => (
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
                                {tab !== "" && (
                                    <SubPopupComponent
                                        tab={tab}
                                        player={player}
                                        onUseItem={onUseItem}
                                        onCloseButton={closeTab}
                                    />
                                )}
                            </>
                        )}
                    </StatHolder>
                </>
            )}
        </>
    );
});

export default PlayerComponent;
