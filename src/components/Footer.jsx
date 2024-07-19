import React from 'react';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #F7F7F7;
`;

const Desc = styled.p`
  margin: 0;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const Centre = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MERNIFICENT MEDIA</Logo>
      </Left>
      <Centre />
      <Right>
        <SocialContainer>
          <Link href="https://github.com/BRKNWAVE/MERNificent-Media-Group-Project" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <GitHubIcon />
            </SocialIcon>
          </Link>
        </SocialContainer>
        <Desc>GitHub Repo Link</Desc>
      </Right>
    </Container>
  );
};

export default Footer;
