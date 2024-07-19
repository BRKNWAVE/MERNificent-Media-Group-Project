import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, TextField as MuiTextField, Card, CardContent, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/data';

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

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    desc: product.desc,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here
    navigate('/admin/manage-products');
  };

  return (
    <Container>
      <AdminNavbar />
      <Title>Edit Product</Title>
      <Card>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <StyledTextField
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Description"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              variant="outlined"
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

export default EditProduct;