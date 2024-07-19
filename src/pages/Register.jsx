import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import RegisterBG from '../assets/img/account/RegisterBG.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${RegisterBG});
  background-size: cover;
  background-position: center -10%;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
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

const Agreement = styled.span`
  margin: 15px 0;
  font-size: 14px;
  text-align: center;
`;

const StyledButton = styled(MuiButton)`
  background-color: #9FE2BF;
  color: black;
  &:hover {
    background-color: #7fbd9a;
  }
`;

const Register = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Form>
          <Title>CREATE AN ACCOUNT</Title>
          <StyledInput placeholder="Name" />
          <StyledInput placeholder="Last Name" />
          <StyledInput placeholder="Username" />
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Password" type="password" />
          <StyledInput placeholder="Confirm Password" type="password" />
          <Agreement>
            By creating an account I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <StyledButton variant="contained">CREATE</StyledButton>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;
