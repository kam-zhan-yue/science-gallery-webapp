import React from "react";
import styled from "styled-components";

// Styled component for the Overlay
const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: none; /* Initially hidden */

  @media (max-width: 768px) {
    display: block;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 150px;
  left: 150px;
  width: 80vw;
  height: 50vh;
  max-width: 500px;
  max-height: 500px;
  overflow: auto;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 40px solid;
  border-image: url("../../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 35px solid;
    border-image: url("../../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 118px;
  left: 120px;
  @media (max-width: 768px) {
    top: 25vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Header = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 160px;
  height: 60px;
`
const Title = styled.div`
  position: relative;
  top: -35px;
  left: -5px;
  text-align: center;
  font-size: 32px;
`

const CloseButton = styled.div`
  display: none;
  position: fixed;
  width: 50px;
  height: 50px;
  background: rgb(200,50,50,0.9);
  
  border-radius: 10px;
  justify-content: center;
  font-size: 32px;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
    top: 25vh;
    left: 89%;
    transform: translate(-50%, -50%);
  }
`

interface OverlayProps {
    title: string;
    children: React.ReactNode;
    onCloseButton: () => void;
}

const SubPopup: React.FC<OverlayProps> = ({ title, children,  onCloseButton}) => {
    return (
        <>
            <Blocker onClick={onCloseButton}/>
            <Background>
                <div className='flex justify-center max-w-2xl flex-col mx-auto'>
                    {children}
                </div>
            </Background>
            <HeaderContainer>
                <Header
                    key={'subpopup-header'}
                    id={'subpopup-header'}
                    src={'../assets/ui/subpopup-header.png'}
                    alt={'subpopup-header'}
                />
                <Title>{title}</Title>
            </HeaderContainer>
            <CloseButton onClick={onCloseButton}>X</CloseButton>
        </>
    );
};

export default SubPopup;
