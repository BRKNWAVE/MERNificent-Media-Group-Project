import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import LoginBG from '../assets/img/account/LoginBG.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${LoginBG});
  background-size: cover;
  background-position: 30% -10%;
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

const ForgotPasswordLink = styled(Link)`
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

const CreateAccountLink = styled(Link)`
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

const StyledButton = styled(MuiButton)`
  && {
    background-color: #9FE2BF;
    color: black;
    &:hover {
      background-color: #7fbd9a;
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('token', result.token);
        navigate('/');
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert('An error occurred');
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>LOGIN</Title>
          <StyledInput name="username" placeholder="Username" onChange={handleChange} />
          <StyledInput name="password" placeholder="Password" type="password" onChange={handleChange} />
          <StyledButton variant="contained" type="submit">LOGIN</StyledButton>
          <CreateAccountLink to="/register">Create a New Account</CreateAccountLink>
          <ForgotPasswordLink to="/forgot-password">Forgot Your Password?</ForgotPasswordLink>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
