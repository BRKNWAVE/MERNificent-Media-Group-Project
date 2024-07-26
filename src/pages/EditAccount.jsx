import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  &:hover {
    background-color: #7fbd9a;
  }
  && {
    background-color: #9FE2BF;
    color: black;
    margin-bottom: 20px;
  }
`;

const DeleteButton = styled(MuiButton)`
  background-color: #ff4d4d;
  color: white;
  &:hover {
    background-color: #e60000;
  }
  && {
    background-color: #ff4d4d;
    color: white;
    margin-bottom: 20px;
  }
`;

const ToggleButton = styled(MuiButton)`
  &:hover {
    background-color: #dcdcdc;
  }
  && {
    background-color: #f0f0f0;
    color: black;
    margin-bottom: 20px;
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
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    // Fetch user data and populate form fields
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setFormData({
          username: data.username || '',
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await fetch('/api/users/delete', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.ok) {
          alert('Account deleted successfully');
          localStorage.removeItem('token'); // Remove token from localStorage when the account is deleted
          navigate('/login'); // Redirect the user to login page
        } else {
          const result = await response.json();
          alert(result.error || 'Failed to delete account');
        }
      } catch (error) {
        alert('An error occurred');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || (formData.password && formData.password !== formData.confirmPassword)) {
      alert('Please fill in all fields and ensure passwords match');
      return;
    }

    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        }),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Account updated successfully');
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
          <Title>Edit Account</Title>
          <StyledInput name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
          <StyledInput name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
          <StyledInput name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
          <StyledInput name="email" placeholder="Email Address" type="email" onChange={handleChange} value={formData.email} />
          <StyledInput
            name="password"
            placeholder="New Password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={formData.password}
          />
          <StyledInput
            name="confirmPassword"
            placeholder="Confirm New Password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <ToggleButton onClick={handlePasswordToggle}>
            {showPassword ? 'Hide Passwords' : 'Show Passwords'}
          </ToggleButton>
          <SubmitButton variant="contained" type="submit">Save Changes</SubmitButton>
          <DeleteButton onClick={handleDelete}>Delete Account</DeleteButton>
          <BackToHomeLink href="/">Back to Home</BackToHomeLink>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default EditAccount;