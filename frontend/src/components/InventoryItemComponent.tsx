import React from "react";
import Item from "../classes/Item.ts";
import styled from "styled-components";

interface InventoryItemProps {
    item: Item;
    onClick: (item: Item) => void;
}

const ItemBackground = styled.div`
  border: 20px solid;
  width: 75px;
  height: 75px;
  border-image: url("../assets/ui/slot-active.png") 15 15 15 15 fill repeat;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const InventoryItemComponent: React.FC<InventoryItemProps> = ({item, onClick}) => {
    return(
      <>
          <ItemBackground onClick={() => onClick(item)}>
          </ItemBackground>
      </>
    );
}

export default InventoryItemComponent;