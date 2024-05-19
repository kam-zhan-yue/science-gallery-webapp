import React from "react";
import styled from "styled-components";
import Player from "../classes/Player.ts";

const Class = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
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
        </>
    )
}

export default PlayerComponent

