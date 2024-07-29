import Player from "../../classes/Player.ts";
import React from "react";
import SubPopup from "../styled/SubPopup.tsx";
import styled from "styled-components";
import {characters} from "../../setup/Character.ts"

interface StatsComponentProps {
    player: Player,
    onCloseButton: () => void;
}

const StatName = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #7F00FF;
`;
const StatTitle = styled.div`
  font-style: bold;
  font-size: 250%;
  margin-top: 10%;
`;

const StatName2 = styled.div`
    padding: 10px;
    background-color: green;
    display: flex;
    justify-content: space-between;
`;


const Seperator = styled.div`
  border: none;
  border-top: 3px solid #ccc; /* Adjust color and style */
  margin: 15px 0; /* Adjust margin */
`;
const Descriptor = styled.div`
    margin-bottom: 30px;
`;

const Stat = styled.div`
`;

const ClassName = styled.div`
`;

const StatsComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    return (
        <>
            <SubPopup title={"Stats"} onCloseButton={close}>
                <StatTitle>{player.name}</StatTitle>
                <Seperator></Seperator>
                <ClassName>Class: {player.class}</ClassName>
                <Descriptor>{characters[player.class].description}</Descriptor>
                <StatName>Finesse: <Stat>{player.finesse}</Stat></StatName>
                <StatName2>Intuition: <Stat>{player.intuition}</Stat></StatName2>
                <StatName>Persuasion: <Stat>{player.persuasion}</Stat></StatName>
            </SubPopup>
        </>
    );
}

export default StatsComponent;