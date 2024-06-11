import Player from "../classes/Player.ts";
import React from "react";
import InventoryComponent from "./InventoryComponent.tsx";
import StatsComponent from "./StatsComponent.tsx";

interface SubPopupProps {
    tab: string,
    player: Player,
}

const SubPopupComponent: React.FC<SubPopupProps> = ({tab, player}) => {
    return (
        <>
            {tab === "inventory" &&
                <>
                    <InventoryComponent player={player}/>
                </>
            }
            {tab === "stats" &&
                <>
                    <StatsComponent player={player}/>
                </>
            }
        </>
    );
}

export default SubPopupComponent;