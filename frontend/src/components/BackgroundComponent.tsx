import React from "react";
import styled from "styled-components";

interface BackgroundComponentProps {
    backgroundKey: string;
}

const backgrounds: { [key: string]: string} = {
    "shangrila_city": "shangrila-city.png",
}

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const Black = styled(Overlay)`
  background: rgb(0,0,0,0.8);
`

const BackgroundBorder = styled.div`
  position: fixed;
  bottom: 200px;
  top: 120px;
  left: 20px;
  right: 20px;
  border: 5px white solid;
  border-radius: 5px;
`

const Background = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensures the image covers the area while maintaining aspect ratio
  z-index: -1;      // Make sure it is behind the overlay
`;

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({backgroundKey}) => {
    const getBackground = () => {
        return `../assets/backgrounds/${backgrounds[backgroundKey]}`;
    }
    return (
        <>
            {backgroundKey === "empty" &&
                <>
                </>
            }
            {backgroundKey === "black" &&
                <Black/>
            }
            {backgroundKey in backgrounds &&
                <>
                    <BackgroundBorder>
                        <Background src={getBackground()} alt='background'/>
                    </BackgroundBorder>
                </>
            }
        </>
    );
}

export default BackgroundComponent;