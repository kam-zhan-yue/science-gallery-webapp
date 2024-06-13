import Player from "../classes/Player.ts";
import React, {useContext, useState} from "react";
import SubPopup from "./SubPopup.tsx";
import Item from "../classes/Item.ts";
import InventoryItemComponent from "./InventoryItemComponent.tsx";
import styled from "styled-components";
import {GameContext, GameContextType} from "../contexts/GameContext.tsx";

interface InventoryComponentProps {
    player: Player,
    onUseItem: (item: Item) => void;
    onCloseButton: () => void;
}

const ItemHeader = styled.div`
  border: 20px solid;
  height: 100px;
  border-image: url("../assets/ui/slot-active.png") 15 15 15 15 fill repeat;
`

const ItemSlots = styled.div`
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface UseContainerProps {
    isActive: boolean;
}

const UseContainer = styled.div<UseContainerProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 20px solid;
  border-image: ${({ isActive }) =>
          isActive ? 'url("../assets/ui/slot-active.png")' : 'url("../assets/ui/slot-inactive.png")'} 15 15 15 15 fill repeat;

  &:hover {
    cursor: pointer;
  }
`

const InventoryComponent: React.FC<InventoryComponentProps> = ({player, onUseItem, onCloseButton}) => {
    const [selected, setSelected] = useState<Item | null>(null);
    const {inkState} = useContext(GameContext) as GameContextType;

    const selectItem = (item: Item) => {
        if(selected === item) {
            setSelected(null);
        } else {
            setSelected(item);
        }
    }

    const useItem = () => {
        if(selected)
            onUseItem(selected);
    }

    const close = () => {
        onCloseButton();
    }

    const active = () => {
        return inkState === "take_item";
    }

    const isSelected = (item: Item) => {
        return selected === item;
    }

    // Determine number of items to display based on screen size
    const isMobileScreen = window.innerWidth < 768;
    const numItemsToShow = isMobileScreen ? 12 : 10;
    const emptySlots = numItemsToShow - player.inventory.length;

    return (
        <>
            <SubPopup title={"Inventory"} onCloseButton={close}>
                <ItemHeader>
                    {selected?.name}
                </ItemHeader>
                <ItemSlots>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                        {/* Render existing items */}
                        {player.inventory.map((item, index) => (
                            <InventoryItemComponent
                                key={index}
                                item={item}
                                selected={isSelected(item)}
                                onClick={selectItem}
                            />
                        ))}
                        {/* Render empty slots */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <InventoryItemComponent
                                key={player.inventory.length + index}
                                item={null}
                                selected={false}
                                onClick={() => {}} />
                        ))}
                    </div>
                </ItemSlots>
                {selected &&
                    <>
                        <UseContainer isActive={active()} onClick={useItem}>
                            Use
                        </UseContainer>
                    </>
                }
            </SubPopup>
        </>
    );
}

export default InventoryComponent;