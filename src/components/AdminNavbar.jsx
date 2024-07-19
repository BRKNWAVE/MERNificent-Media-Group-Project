import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';


const Container = styled.div`
  height: 60px;
  background-color: #d3d3d3;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

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

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
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
  color: inherit;
`;

const AdminNavbar = () => {
  const navigate = useNavigate();

  // Use navigate to redirect to the home page when we logout
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/admin/dashboard">
            <Logo>Admin Panel</Logo>
          </StyledLink>
        </Left>
        <Centre />
        <Right>
          <StyledLink to="/admin/dashboard">
            <MenuItem>Dashboard</MenuItem>
          </StyledLink>
          <StyledLink to="/admin/manage-users">
            <MenuItem>Manage Users</MenuItem>
          </StyledLink>
          <StyledLink to="/admin/manage-products">
            <MenuItem>Manage Products</MenuItem>
          </StyledLink>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AdminNavbar;
