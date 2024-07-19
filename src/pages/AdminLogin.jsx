import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledInput = styled(MuiInput)`
  margin-bottom: 15px;
  width: 100%;
`;

const StyledButton = styled(MuiButton)`
  background-color: #9FE2BF;
  color: black;
  margin-bottom: 20px;
  &:hover {
    background-color: #7fbd9a;
  }
`;

const AdminLogin = () => {
  return (
    <Container>
      <Form>
        <Title>Admin Login</Title>
        <StyledInput placeholder="Username" />
        <StyledInput placeholder="Password" type="password" />
        <StyledButton variant="contained">LOGIN</StyledButton>
        <Link to="/admin/dashboard">Go to Dashboard</Link>
      </Form>
    </Container>
  );
};

export default AdminLogin;