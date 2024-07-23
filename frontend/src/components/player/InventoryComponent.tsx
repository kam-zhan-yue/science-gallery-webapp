import Player from "../../classes/Player.ts";
import React, {useContext, useState} from "react";
import SubPopup from "../styled/SubPopup.tsx";
import {getImage, items} from "../../setup/Item.ts";
import InventoryItemComponent from "./InventoryItemComponent.tsx";
import styled from "styled-components";
import {GameContext, GameContextType} from "../../contexts/GameContext.tsx";

interface InventoryComponentProps {
    player: Player,
    onUseItem: (key: string) => void;
    onCloseButton: () => void;
}

const ItemHeader = styled.div`
  border: 20px solid;
  border-image: url("../../assets/ui/slot-active.png") 15 15 15 15 fill repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 90px;
  @media (max-width: 600px) {
    border: 12px solid;
    border-image: url("../../assets/ui/slot-active.png") 15 15 15 15 fill repeat;
  }
`

const ItemView = styled.div`

`

const ItemImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  min-height: 50px;
  min-width: 50px;
`
const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  margin: 2px 0; /* Adjust margin */
`
const ItemTitle = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`

const ItemDescription = styled.div`
  text-overflow: ellipsis;
`

const ItemSlots = styled.div`
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UseContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UseButton = styled.div<{isActive: boolean}>`
  width: 100px;
  height: 50px;

  margin-top: auto;
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
    const [selected, setSelected] = useState<string>('');
    const {inkState} = useContext(GameContext) as GameContextType;

    const selectItem = (item: string) => {
        if(selected === item) {
            setSelected('');
        } else {
            setSelected(item);
        }
    }

    const useItem = () => {
        if(selected && active()) {
            onUseItem(selected);
            close();
        }
    }

    const close = () => {
        onCloseButton();
    }

    const active = () => {
        return inkState === "take_item";
    }

    const isSelected = (item: string) => {
        return selected === item;
    }

    // Convert inventory object to an array for rendering
    const inventoryArray = Object.values(player.inventory);

    // Determine number of items to display based on screen size
    const isMobileScreen = window.innerWidth < 768;
    const numItemsToShow = isMobileScreen ? 8 : 10;
    const emptySlots = numItemsToShow - inventoryArray.length;

    return (
        <>
            <SubPopup title={"Inventory"} onCloseButton={close}>
                <ItemHeader>
                    {selected &&
                        <>
                            {/*Super dangerous code haha*/}
                            <ItemView>
                                <ItemImage src={getImage(items[selected])} alt={items[selected].name}/>
                            </ItemView>
                            <div className="ml-2">
                                <ItemTitle>{items[selected].name}</ItemTitle>
                                <Separator/>
                                <ItemDescription>{items[selected].description}</ItemDescription>
                            </div>
                        </>
                    }
                </ItemHeader>
                <ItemSlots>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-2 w-full">
                        {/* Render existing items */}
                        {inventoryArray.map((item, index) => (
                            <InventoryItemComponent
                                key={index}
                                itemKey={item}
                                selected={isSelected(item)}
                                onClick={selectItem}
                            />
                        ))}
                        {/* Render empty slots */}
                        {Array.from({ length: emptySlots }).map((_, index) => (
                            <InventoryItemComponent
                                key={inventoryArray.length + index}
                                itemKey=''
                                selected={false}
                                onClick={() => {}} />
                        ))}
                    </div>
                </ItemSlots>
                {selected &&
                    <>
                        <UseContainer>
                            <UseButton isActive={active()} onClick={useItem}>
                                Use
                            </UseButton>
                        </UseContainer>
                    </>
                }
            </SubPopup>
        </>
    );
}

export default InventoryComponent;
