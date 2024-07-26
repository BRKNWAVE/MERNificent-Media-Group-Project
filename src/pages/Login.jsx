import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import LoginBG from '../assets/img/account/LoginBG.jpg';


// Styles for the Login component using styled-components, && specificity is used to override MUI styles for buttons throughout the application
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

// Login component with a state to store the form data, handleChange and handleSubmit functions to handle form input and submission, and a form with input fields for username and password
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
      // Send a login / POST request to the server with the form data
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('token', result.token); // Store the JWT token in the browser's local storage
        navigate('/'); // Redirect to the home page after successful login
      } else {
        alert(result.error); // Show an alert with the error message if the request is not successful
      }
    } catch (err) {
      alert('An error occurred'); // Show a generic error message otherwise
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
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
