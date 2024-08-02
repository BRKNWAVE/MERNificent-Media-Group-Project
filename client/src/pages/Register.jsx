import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import RegisterBG from '../assets/img/account/RegisterBG.jpg';
import { useNavigate } from 'react-router-dom';


// Styles for the Register component using styled-components, && specificity is used to override MUI styles for buttons throughout the application
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
  && {
    background-color: #9FE2BF;
    color: black;
    &:hover {
      background-color: #7fbd9a;
    }
  }
`;
// Displays a registration form and use the useState hook to manage form data
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
// Handle form input changes and form submission
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      // Send a registration request to the server
      const response = await fetch('https://mernificent-media-group-project.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        const navigate = useNavigate();
        navigate('/login');
      } else {
        const errorResult = await response.json();
        console.error('Error:', errorResult);
        alert(errorResult.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('An error occurred');
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>CREATE AN ACCOUNT</Title>
          <StyledInput name="firstName" placeholder="First Name" onChange={handleChange} />
          <StyledInput name="lastName" placeholder="Last Name" onChange={handleChange} />
          <StyledInput name="username" placeholder="Username" onChange={handleChange} />
          <StyledInput name="email" placeholder="Email" type="email" onChange={handleChange} />
          <StyledInput name="password" placeholder="Password" type="password" onChange={handleChange} />
          <StyledInput name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} />
          <Agreement>
            By creating an account I consent to the processing of my personal data for educational purposes.
          </Agreement>
          <StyledButton variant="contained" type="submit">CREATE</StyledButton>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;
