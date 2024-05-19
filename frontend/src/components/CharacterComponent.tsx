import React from "react";
import styled from "styled-components";

const Class = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
`

interface CharacterComponentProps {
    className: string;
}

const CharacterComponent: React.FC<CharacterComponentProps> = ({className}) => {
    return (
        <>
            <Class>
                Chosen Class: {className}
            </Class>
        </>
    )
}

export default CharacterComponent

