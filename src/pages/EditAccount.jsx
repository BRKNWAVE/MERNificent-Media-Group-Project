import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.8);
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

const SubmitButton = styled(MuiButton)`
  background-color: #9FE2BF;
  color: black;
  margin-bottom: 20px;
  &:hover {
    background-color: #7fbd9a;
  }
`;

const BackToHomeLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  display: block;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const EditAccount = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Form>
          <Title>Edit Account</Title>
          <StyledInput placeholder="Full Name" />
          <StyledInput placeholder="Email Address" type="email" />
          <StyledInput placeholder="New Password" type="password" />
          <StyledInput placeholder="Confirm New Password" type="password" />
          <SubmitButton variant="contained">Save Changes</SubmitButton>
          <BackToHomeLink href="/">Back to Home</BackToHomeLink>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default EditAccount;
