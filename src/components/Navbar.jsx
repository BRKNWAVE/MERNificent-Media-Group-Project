import React from 'react';
import { Badge } from '@mui/material';
import { Search, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import styled from '@emotion/styled';

// Navbar container
const Container = styled.div`
  height: 40px;
  background-color: #d3d3d3;
`;

// Use a wrapper to contain the left, center, and right components
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

// Equally space the left, center, and right components using flexbox
const Left = styled.div`
  flex: 1;
`;

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

// Logo Component
const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;

// Search Container and Placeholder Input
const SearchContainer = styled.div`
  position: relative; /* Set position to relative */
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px; /* Optional: add border-radius for rounded corners */
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 30px; /* Add padding to the left to make space for the icon */
  flex: 1;
`;

const SearchIcon = styled(Search)`
  position: absolute; /* Position the icon absolutely */
  left: 10px; /* Adjust the position of the icon inside the container */
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 10px; 
  cursor: pointer;
  padding-top: 2px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MERNIFICENT MEDIA</Logo>
        </Left>
        <Centre>
          <SearchContainer>
            <SearchIcon style={{color: "#d3d3d3", fontSize: 16, padding: 5}}/>
            <Input placeholder="Search..." />
          </SearchContainer>
        </Centre>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
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
