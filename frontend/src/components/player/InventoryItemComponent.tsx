import React, {useEffect, useState} from "react";
import {Item, getImage, items} from "../../setup/Item.ts";
import styled from "styled-components";

interface InventoryItemProps {
    itemKey: string;
    selected: boolean; // Add the active boolean
    onClick?: (key: string) => void;
}

const ItemBackground = styled.div<{ hasItem: boolean, selected: boolean }>`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 15px solid;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-image: url(${props => props.selected ? "../assets/ui/slot-inactive.png" : "../assets/ui/slot-active.png"}) 15 15 15 15 fill repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: ${props => (props.hasItem ? "pointer" : "default")};
  }
  @media (max-width: 600px) {
    border: 12px solid;
    border-image: url(${props => props.selected ? "../assets/ui/slot-inactive.png" : "../assets/ui/slot-active.png"}) 15 15 15 15 fill repeat;
  }
`

const ItemImage = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 100%;
`

const InventoryItemComponent: React.FC<InventoryItemProps> = ({itemKey, selected, onClick}) => {
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        if(itemKey in items) {
            setItem(items[itemKey]);
        }
    }, [itemKey]);
    const onClicked = () => {
        if(onClick && itemKey)
            onClick(itemKey)
    }

    const hasItem = (): boolean => {
        return itemKey !== '';
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
