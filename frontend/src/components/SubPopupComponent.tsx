import Player from "../classes/Player.ts";
import React from "react";
import InventoryComponent from "./InventoryComponent.tsx";
import StatsComponent from "./StatsComponent.tsx";
import Item from "../classes/Item.ts";

interface SubPopupProps {
    tab: string,
    player: Player,
    onUseItem: (item: Item) => void;
}

const SubPopupComponent: React.FC<SubPopupProps> = ({tab, player,  onUseItem}) => {
    return (
        <>
            {tab === "inventory" &&
                <>
                    <InventoryComponent player={player} onUseItem={onUseItem}/>
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