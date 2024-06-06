import React from "react";
import styled from "styled-components";
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
  position: fixed;
  top: 40px;
  left: 20px;
  display: flex;
  flex-direction: column;
`

const Stat = styled.div`
  font-size: 20px;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
`

interface PlayerComponentProps {
    player: Player;
}

const PlayerComponent: React.FC<PlayerComponentProps> = ({player}) => {
    return (
        <>
            <Class>
                Chosen Class: {player.class}
            </Class>
            <StatHolder>
                <Stat>
                    Health: {player.health}
                </Stat>
                <Stat>
                    Finesse: {player.finesse}
                </Stat>
                <Stat>
                    Intuition: {player.intuition}
                </Stat>
                <Stat>
                    Persuasion: {player.persuasion}
                </Stat>
            </StatHolder>
        </>
    )
}

export default PlayerComponent

