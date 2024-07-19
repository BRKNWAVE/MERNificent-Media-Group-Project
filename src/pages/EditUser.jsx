import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, TextField as MuiTextField, Card, CardContent, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../data/data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledTextField = styled(MuiTextField)`
  && {
    margin-bottom: 20px;
  }
`;

const SaveButton = styled(MuiButton)`
  && {
    background-color: #7fbd9a;
    color: white;
    &:hover {
      background-color: #6abf69;
    }
  }
`;

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <Container>
        <AdminNavbar />
        <Title>User Not Found</Title>
        <Card>
          <CardContent>
            <Typography variant="h6" color="error">
              The user with ID {id} does not exist.
            </Typography>
          </CardContent>
        </Card>
        <Footer />
      </Container>
    );
  }

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    password: user.password,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here (Send a PUT request to the API in the real world)
    navigate('/admin/manage-users');
  };

  return (
    <Container>
      <AdminNavbar />
      <Title>Edit User</Title>
      <Card>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <StyledTextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordToggle} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <SaveButton type="submit" variant="contained">
              Save Changes
            </SaveButton>
          </Form>
        </CardContent>
      </Card>
      <Footer />
    </Container>
  );
};

export default EditUser;
