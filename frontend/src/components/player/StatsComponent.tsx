import Player from "../../classes/Player.ts";
import React from "react";
import SubPopup from "../styled/SubPopup.tsx";
import styled from "styled-components";
import {characters} from "../../setup/Character.ts"
import { TextStyle } from "../styled/Text.tsx";

interface StatsComponentProps {
    player: Player,
    onCloseButton: () => void;
}

const StatTitle = styled.div`
  font-style: bold;
  font-size: 250%;
  margin-top: 10px;
`;

const StatName = styled(TextStyle)`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
`;


const Seperator = styled.div`
  border: none;
  border-top: 3px solid #ccc; /* Adjust color and style */
  margin-top: 15px;
  margin-bottom: 10px;
`;

const StatSeparator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  `
const Descriptor = styled.div`
  margin-bottom: 10px;
`;

const Stat = styled.div`
  font-size: 24px;
`;

const StatsComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    return (
        <>
            <SubPopup title={"Stats"} onCloseButton={close}>
                <StatTitle>{player.name}</StatTitle>
                <Seperator/>
                <Descriptor>{characters[player.class].description}</Descriptor>
                <StatSeparator/>
                <StatName>Class<Stat>{player.class}</Stat></StatName>
                <StatSeparator/>
                <StatName>Finesse<Stat>{player.finesse}</Stat></StatName>
                <StatSeparator/>
                <StatName>Intuition<Stat>{player.intuition}</Stat></StatName>
                <StatSeparator/>
                <StatName>Persuasion<Stat>{player.persuasion}</Stat></StatName>
                <StatSeparator/>
            </SubPopup>
        </>
    );
}

export default StatsComponent;
