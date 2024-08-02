import React from 'react';
import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';
import { logoImage } from '../data/data';
const apiUrl = import.meta.env.VITE_API_BASE_URL;

// Styles for the Footer component using Emotion
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #F7F7F7;
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

const LogoImg = styled.img`
  width: 30px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.div`
  margin-left: 10px;
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

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <StyledLink to="/">
          <LogoContainer>
            <LogoImg src={logoImage} alt="Logo" />
            <Logo>MERNIFICENT MEDIA</Logo>
          </LogoContainer>
        </StyledLink>
      </Left>
      <Centre />
      <Right>
        <Desc>
          <span>GitHub Repo Link</span>
          <SocialIcon>
            <GitHubIcon />
          </SocialIcon>
        </Desc>
      </Right>
    </Container>
  );
};

export default Footer;
