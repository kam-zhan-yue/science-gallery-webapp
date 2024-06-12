import Player from "../classes/Player.ts";
import React, {useContext} from "react";
import SubPopup from "./SubPopup.tsx";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";
import Item from "../classes/Item.ts";

interface InventoryComponentProps {
    player: Player,
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({player, }) => {
    const {inkState} = useContext(GameContext) as GameContextType;

    const useItem = (item: Item) => {
        if(inkState === "take_item") {
            console.log(`try to use ${item.name}`);
        }
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