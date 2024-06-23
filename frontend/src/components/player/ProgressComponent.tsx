import styled from "styled-components";
import React from "react";

interface ProgressProps {
    progress: number;
}

const ProgressIndicator = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width:500px;
  height:500px;
`

const ProgressComponent: React.FC<ProgressProps> = ({progress}) => {
    const prefix: string = "../../assets/ui/";

    const imageUrl = (): string => {
        let index = Math.min(Math.max(progress, 1), 5);
        return prefix + `progress-${index}.png`;
    }

    return (
        <>
            <ProgressIndicator src={imageUrl()} alt='progress-indicator'/>
        </>
    );
}

export default ProgressComponent;