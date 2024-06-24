import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Blocker = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2A213899;
`
const MenuComponent: React.FC = () => {
    return (
        <>
            <Blocker>
                Start Game
            </Blocker>
        </>
    );
}

export default MenuComponent;