import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NormalText, TextStyle } from "./styled/Text.tsx";
import { colours } from "./styled/Constants.tsx";
import { GameContext, GameContextType } from "../contexts/GameContext.tsx";
import StatisticsComponent from "./statistics/StatisticsComponent.tsx";

interface MenuProps {
  startGame: () => void;
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
  background: #2a213866;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const StatisticsButton = styled(TextStyle)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  text-align: center;

  border: 1px white solid;
  padding: 5px 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;

  transition: 0.3s;
  -webkit-transition: 0.3s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background: #999999;
    }
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(TextStyle)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  font-size: 64px;
  font-weight: 800;
  line-height: 1em;
`;

const Subtitle = styled(TextStyle)`
  font-size: 24px;
  font-weight: 800;
  line-height: 1em;
  margin-bottom: 10px;
`;

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
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const Footer = styled(TextStyle)`
  position: fixed;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubHeading = styled(NormalText)`
  font-size: 12px;
  line-height: 1em;
  font-weight: 100;
`;

const Warning = styled(NormalText)`
  font-size: 12px;
  line-height: 1em;
  margin-top: 5px;
  font-weight: 100;
`;

const ToggleSwitch = styled(TextStyle)`
  margin-top: 10px;

  label {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  input {
    margin-left: 10px;
    transform: scale(1.2);
  }
`;

const Slider = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  margin-left: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: ${colours.secondary};
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }
`;

const MenuComponent: React.FC<MenuProps> = ({ startGame }) => {
  const { debug, setDebug } = useContext(GameContext) as GameContextType;
  const [statistics, setStatistics] = useState<boolean>(false);

  const handleToggle = () => {
    setDebug(!debug);
  };

  function toggleStatistics() {
    setStatistics((prev) => (prev = !prev));
  }

  return (
      <Overlay
        key="menuComponent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatisticsButton onClick={toggleStatistics}>
          {!statistics && <>Statistics</>}
          {statistics && <>Game</>}
        </StatisticsButton>

        {statistics && (
          <>
            <StatisticsComponent />
          </>
        )}

        {!statistics && (
          <>
            <TextContainer>
              <Title>re:COLLECT</Title>
              <Subtitle>What will you remember?</Subtitle>
              <StartButton onClick={startGame}>Start</StartButton>
              <ToggleSwitch>
                <label>
                  Debug Mode
                  <Slider>
                    <input
                      type="checkbox"
                      checked={debug}
                      onChange={handleToggle}
                    />
                    <span className="slider round"></span>
                  </Slider>
                </label>
              </ToggleSwitch>
            </TextContainer>
          </>
        )}
        <Footer>
          <LogoContainer>
            <a
              href="https://melbourne.sciencegallery.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo
                src="../assets/ui/science-gallery-logo-white.png"
                alt="science-gallery"
              />
            </a>
            <a
              href="https://www.unimelb.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo src="../assets/ui/unimelb-logo-white.png" alt="unimelb" />
            </a>
          </LogoContainer>
          <SubHeading>Made for Science Gallery Melbourne</SubHeading>
          <Warning>
            Experimental Build: <b>Progress will be lost if page is reloaded</b>
          </Warning>
        </Footer>
      </Overlay>
  );
};

export default MenuComponent;
