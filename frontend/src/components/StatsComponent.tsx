import Player from "../classes/Player.ts";
import React from "react";
import SubPopup from "./SubPopup.tsx";
import styled from "styled-components";

interface StatsComponentProps {
    player: Player,
    onCloseButton: () => void;
}

const Stat = styled.div`
`

const StatsComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    return (
        <>
            <SubPopup title={"Stats"} onCloseButton={close}>
                <Stat>Class: {player.class}</Stat>
                <Stat>Finesse: {player.finesse}</Stat>
                <Stat>Intuition: {player.intuition}</Stat>
                <Stat>Persuasion: {player.persuasion}</Stat>
            </SubPopup>
        </>
    );
}

export default StatsComponent;