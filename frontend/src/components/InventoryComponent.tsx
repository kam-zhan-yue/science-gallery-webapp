import Player from "../classes/Player.ts";
import React from "react";
import SubPopup from "./SubPopup.tsx";
import Item from "../classes/Item.ts";

interface InventoryComponentProps {
    player: Player,
    onUseItem: (item: Item) => void;
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({player, onUseItem }) => {

    const useItem = (item: Item) => {
        onUseItem(item);
    }

    return (
        <>
            <SubPopup title={"Inventory"}>
                {player.inventory.map((item, index) => (
                    <>
                        <div key={index} onClick={()=>useItem(item)}>
                            {item.name} {index}
                        </div>
                    </>
                ))}
            </SubPopup>
        </>
    );
}

export default InventoryComponent;