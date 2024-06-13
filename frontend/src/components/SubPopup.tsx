import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 150px;
  left: 150px;
  width: 80vw;
  height: 50vh;
  max-width: 500px;
  max-height: 500px;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 40px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 600px) {
    padding-right: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 118px;
  left: 120px;
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
  }
`

interface OverlayProps {
    title: string;
    children: React.ReactNode;
}

const SubPopup: React.FC<OverlayProps> = ({ title, children }) => {
    return (
        <>
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
        </>
    );
};

export default SubPopup;
