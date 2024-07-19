import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const DashboardCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledButton = styled(MuiButton)`
  && {
    background-color: #9FE2BF;
    color: black;
    margin: 20px;
    width: 100%;
    &:hover {
      background-color: #7fbd9a;
    }
  }
`;

const AdminDashboard = () => {
  return (
    <Container>
      <AdminNavbar />
      <MainContent>
        <DashboardCard>
          <CardContentStyled>
            <Typography variant="h4" gutterBottom>
              Admin Dashboard
            </Typography>
            <StyledLink to="/admin/dashboard">
              <StyledButton variant="contained">
                Dashboard
              </StyledButton>
            </StyledLink>
            <StyledLink to="/admin/manage-users">
              <StyledButton variant="contained">
                Manage Users
              </StyledButton>
            </StyledLink>
            <StyledLink to="/admin/manage-products">
              <StyledButton variant="contained">
                Manage Products
              </StyledButton>
            </StyledLink>
          </CardContentStyled>
        </DashboardCard>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default AdminDashboard;
