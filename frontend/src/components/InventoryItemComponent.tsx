import React from "react";
import {Item, getImage} from "../classes/Item.ts";
import styled from "styled-components";

interface InventoryItemProps {
    item: Item | null;
    selected: boolean; // Add the active boolean
    onClick?: (item: Item) => void;
}

const ItemBackground = styled.div<{ hasItem: boolean, selected: boolean }>`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 20px solid;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-image: url(${props => props.selected ? "../assets/ui/slot-inactive.png" : "../assets/ui/slot-active.png"}) 15 15 15 15 fill repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: ${props => (props.hasItem ? "pointer" : "default")};
  }
`

const ItemImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 100%;
`

const InventoryItemComponent: React.FC<InventoryItemProps> = ({item, selected, onClick}) => {
    const onClicked = () => {
        if(onClick && item)
            onClick(item)
    }

    const hasItem = (): boolean => {
        return item !== null;
    }

    return(
      <>
          <ItemBackground hasItem={hasItem()} selected={selected} onClick={onClicked}>
              {hasItem() &&
                  <>
                    <ItemImage src={getImage(item)} alt={item?.name}/>
                  </>
              }
          </ItemBackground>
      </>
    );
}

export default InventoryItemComponent;