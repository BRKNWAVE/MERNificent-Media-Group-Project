import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Button as MuiButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

const users = [
  // Mock / Fake data to show the front end is actually working
  { id: 1, name: 'John Doe', email: 'john@example.com' },
];

const ManageUsers = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit-user/${id}`);
  };

  return (
    <Container>
      <AdminNavbar />
      <Title>Manage Users</Title>
      <ActionsContainer>
        <AddButton variant="contained">Add User</AddButton>
      </ActionsContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <EditButton size="small" onClick={() => handleEdit(user.id)}>Edit</EditButton>
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

export default ManageUsers;
