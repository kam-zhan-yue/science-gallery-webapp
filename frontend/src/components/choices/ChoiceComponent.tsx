import React from 'react';
import styled from 'styled-components';
import {Choice} from "inkjs/engine/Choice";
import ChoiceOptionComponent from "./ChoiceOptionComponent.tsx";
import {motion} from "framer-motion";

const ScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* semi-transparent black background */
`

const ChoiceOverlay = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column; /* Display choices vertically */
  align-items: center; /* Center horizontally */
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`

interface ChoiceComponentProps {
    choices: Choice[];
    handleChoiceClick: (choiceIndex: number) => void;
}

const ChoiceComponent: React.FC<ChoiceComponentProps> = ({ choices, handleChoiceClick }) => {
    return (
        <>
            <ScreenOverlay/>
            <ChoiceOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0}}
                transition={{ duration: 0.2 }}>
                {choices.map((choice, index) => (
                    <ChoiceOptionComponent key={index} choice={choice} index={index} handleClick={handleChoiceClick}/>
                ))}
            </ChoiceOverlay>
        </>
    );
};

export default ChoiceComponent;