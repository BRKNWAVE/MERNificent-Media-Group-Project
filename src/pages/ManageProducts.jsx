import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { products } from '../data/data';
import { Link } from 'react-router-dom';

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

const ActionsContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

const AddButton = styled(MuiButton)`
  && {
    background-color: #9FE2BF;
    color: black;
    &:hover {
      background-color: #7fbd9a;
    }
  }
`;

const EditButton = styled(MuiButton)`
  && {
    background-color: #7fbd9a;
    color: white;
    margin-left: 10px;
    &:hover {
      background-color: #6abf69;
    }
  }
`;

const DeleteButton = styled(MuiButton)`
  && {
    background-color: #f44336;
    color: white;
    margin-left: 10px;
    &:hover {
      background-color: #c62828;
    }
  }
`;

const ManageProducts = () => {
  return (
    <Container>
      <AdminNavbar />
      <Title>Manage Products</Title>
      <ActionsContainer>
        <AddButton variant="contained">Add Product</AddButton>
      </ActionsContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <img src={product.img} alt={product.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.desc}</TableCell>
                <TableCell>
                  <Link to={`/admin/edit-product/${product.id}`}>
                    <EditButton size="small">Edit</EditButton>
                  </Link>
                  <DeleteButton size="small">Delete</DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </Container>
  );
};

export default ManageProducts;