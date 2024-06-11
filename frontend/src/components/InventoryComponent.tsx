import Player from "../classes/Player.ts";
import React from "react";
import SubPopup from "./SubPopup.tsx";

interface InventoryComponentProps {
    player: Player,
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({player}) => {
    return (
        <>
            <SubPopup title={"Inventory"}>
                {player.class}
            </SubPopup>
        </>
    );
}

export default InventoryComponent;