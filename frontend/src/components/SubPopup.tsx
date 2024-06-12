import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 150px;
  left: 150px;
  height: 500px;
  width: 500px;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 40px solid;
  border-image: url("../assets/ui/dialogue-box.png") 15 15 15 15 fill repeat;

  @media (max-width: 600px) {
    padding-right: 30px;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 118px;
  left: 120px;
`

const Header = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 160px;
  height: 60px;
`
const Title = styled.div`
  position: fixed;
  top: 142px;
  left: 135px;
  font-size: 32px;
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
