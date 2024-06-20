import Player from "../classes/Player.ts";
import React from "react";
import InventoryComponent from "./player/InventoryComponent.tsx";
import StatsComponent from "./player/StatsComponent.tsx";
import ShardComponent from "./player/ShardComponent.tsx";

interface SubPopupProps {
    tab: string,
    player: Player,
    onUseItem: (key: string) => void;
    onCloseButton: () => void;
}

const SubPopupComponent: React.FC<SubPopupProps> = ({tab, player,  onUseItem, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    return (
        <>
            {tab === "inventory" &&
                <>
                    <InventoryComponent player={player} onUseItem={onUseItem} onCloseButton={close}/>
                </>
            }
            {tab === "stats" &&
                <>
                    <StatsComponent player={player} onCloseButton={close}/>
                </>
            }
            {tab === "shard" &&
                <>
                    <ShardComponent player={player} onCloseButton={close}/>
                </>
            }
        </>
    );
}

export default SubPopupComponent;