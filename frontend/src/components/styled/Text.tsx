import styled from "styled-components";
import {motion} from "framer-motion";

export const TextStyle = styled(motion.div)`
  font-family: "VT323", monospace;
  font-optical-sizing: auto;
`

export const NormalText = styled(motion.div)`
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
          "wdth" 100;
`