import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {NormalText, TextStyle} from "./styled/Text.tsx";

interface MenuProps {
    start: () => void,
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2A213899;
  
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled(TextStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100px;
  
  font-size: 64px;
  font-weight: 800;
  line-height: 1em;
`

const Subtitle = styled(TextStyle)`
  font-size: 24px;
  font-weight: 800;
  line-height: 1em;
  margin-bottom: 10px;
`

const StartButton = styled(TextStyle)`
  border: 1px white solid;
  padding: 5px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  
  transition: 0.3s;
  -webkit-transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    background: #999999;
  }
`

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

const Logo = styled.img`
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`

const Footer = styled(TextStyle)`
  position: fixed;
  bottom: 20px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SubHeading = styled(NormalText)`
  font-size: 12px;
  line-height: 1em;
  font-weight: 100;
`

const Warning = styled(NormalText)`
  font-size: 12px;
  line-height: 1em;
  margin-top: 5px;
  font-weight: 100;
`

const MenuComponent: React.FC<MenuProps> = ({start}) => {
    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0}}
                transition={{ duration: 0.2 }}>
                <TextContainer>
                    <Title>re:COLLECT</Title>
                    <Subtitle>What will you remember?</Subtitle>
                    <StartButton onClick={start}>Start</StartButton>
                </TextContainer>
                <Footer>
                    <LogoContainer>
                        <a href="https://melbourne.sciencegallery.com/" target="_blank" rel="noopener noreferrer">
                            <Logo src='../assets/ui/science-gallery-logo-white.png' alt='science-gallery'/>
                        </a>
                        <a href="https://www.unimelb.edu.au/" target="_blank" rel="noopener noreferrer">
                            <Logo src='../assets/ui/unimelb-logo-white.png' alt='unimelb'/>
                        </a>
                    </LogoContainer>
                    <SubHeading>Made for Science Gallery Melbourne</SubHeading>
                    <Warning>Experimental Build: <b>Progress will be lost if page is reloaded</b></Warning>
                </Footer>
            </Overlay>
        </>
    );
}

export default MenuComponent;