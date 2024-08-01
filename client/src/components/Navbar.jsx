import React, { useEffect, useState } from 'react';
import { Badge } from '@mui/material';
import { Search, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { isAuthenticated, signOut } from '../utils/authUtility';
import { logoImage } from '../data/data';

// Navbar styles using Emotion
// Navbar container
const Container = styled.div`
  height: 60px;
  background-color: #d3d3d3;
`;

// Use a wrapper to contain the left, center, and right components
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

// Equally space the left, center, and right components using flexbox
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; // Align items vertically
`;

// Center and Right components
const Centre = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Logo Container Component to hold the logo image and text together
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Logo Component
const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px; 
`;

// Logo Image Component
const LogoImg = styled.img`
  width: 30px;
`;

// Search Container and Placeholder Input
const SearchContainer = styled.div`
  position: relative; 
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 20px;
  height: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 30px; /* padding to the left to make space for the magnifying glass icon */
  flex: 1;
  border-radius: 20px;
  height: 140%;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 10px; /* Adjust the position of the search icon inside the container */
`;

const MenuItem = styled.div`
  font-size: 16px;
  margin-left: 50px; 
  cursor: pointer;
  padding-top: 2px;
`;

// Styled Link for navigation
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
`;

const Navbar = () => {
  // State to check if user is authenticated and a hook to navigate to different routes
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  // Check if user is authenticated when the component mounts
  useEffect(() => {
    const checkAuth = async () => {
      const status = await isAuthenticated();
      setAuthenticated(status);
    };

    checkAuth();
  }, []);
// Function to handle sign out on the Navbar when the user clicks on the Sign Out button
  const handleSignOut = () => {
    signOut();
    setAuthenticated(false);
    navigate('/login'); // Redirect to login page after signing out
  };

  // Conditional/Dynamic rendering of the Navbar based on the user's authentication status (logged in or not)
  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/">
            <LogoContainer>
              <LogoImg src={logoImage} alt="Logo" />
              <Logo>MERNIFICENT MEDIA</Logo>
            </LogoContainer>
          </StyledLink>
        </Left>
        <Centre>
          <SearchContainer>
            <SearchIcon style={{color: "#d3d3d3", fontSize: 16, padding: 5}}/>
            <Input placeholder="Search..." />
          </SearchContainer>
        </Centre>
        <Right>
          {!authenticated ? (
            <>
              <StyledLink to="/register">
                <MenuItem>Register</MenuItem>
              </StyledLink>
              <StyledLink to="/login">
                <MenuItem>Sign In</MenuItem>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/product-gallery">
                <MenuItem>Products</MenuItem>
              </StyledLink>
              <StyledLink to="/about">
                <MenuItem>About</MenuItem>
              </StyledLink>
              <StyledLink to="/edit-account">
                <MenuItem>Edit Account</MenuItem>
              </StyledLink>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </>
          )}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
