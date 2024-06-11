import Player from "../classes/Player.ts";
import React from "react";
import SubPopup from "./SubPopup.tsx";

interface StatsComponentProps {
    player: Player,
}

const StatsComponent: React.FC<StatsComponentProps> = ({player}) => {
    return (
        <>
            <SubPopup title={"Stats"}>
                {player.class}
            </SubPopup>
        </>
    );
}

export default StatsComponent;