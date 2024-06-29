import styled from "styled-components";
import {TextStyle} from "./Text.tsx";


export const SelectButton = styled(TextStyle)`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 8px solid;
  width: 100%;
  height: 10%;
  font-size: 20px;
  border-image: url("../../assets/ui/button-submit.png") 6 fill repeat;
  font-weight: 800;
  color: white;
  text-shadow: 0 0 3px #000000;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const BackButton = styled(TextStyle)`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 6px solid;
  width: 100%;
  font-weight: 800;
  color: white;
  text-shadow: 0 0 3px #000000;
  border-image: url("../../assets/ui/button-secondary.png") 6 fill repeat;

  &:hover {
    cursor: pointer;
  }
`