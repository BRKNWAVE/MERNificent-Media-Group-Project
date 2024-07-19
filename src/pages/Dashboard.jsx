import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/admin/users">Manage Users</Link>
        <Link to="/admin/products">Manage Products</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
