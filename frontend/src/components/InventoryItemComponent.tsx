import React from "react";
import Item from "../classes/Item.ts";
import styled from "styled-components";

interface InventoryItemProps {
    item: Item | null;
    selected: boolean; // Add the active boolean
    onClick?: (item: Item) => void;
}

const ItemBackground = styled.div<{ hasItem: boolean, selected: boolean }>`
  border: 20px solid;
  width: 75px;
  height: 75px;
  border-image: url(${props => props.selected ? "../assets/ui/slot-inactive.png" : "../assets/ui/slot-active.png"}) 15 15 15 15 fill repeat;

  &:hover {
    cursor: ${props => (props.hasItem ? "pointer" : "default")};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const InventoryItemComponent: React.FC<InventoryItemProps> = ({item, selected, onClick}) => {
    const onClicked = () => {
        if(onClick && item)
            onClick(item)
    }
    return(
      <>
          <ItemBackground hasItem={item !== null} selected={selected} onClick={onClicked}>
          </ItemBackground>
      </>
    );
}

export default InventoryItemComponent;