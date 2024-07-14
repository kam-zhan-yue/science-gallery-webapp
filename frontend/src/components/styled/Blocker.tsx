import styled from "styled-components";
import { colours } from "./Constants";
import { motion } from "framer-motion";

export const Blocker = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colours.blocker};
`;

export const InvisibleBlocker = styled(motion.div)`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
