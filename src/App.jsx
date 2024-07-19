import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductGallery from './pages/ProductGallery';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import EditAccount from './pages/EditAccount';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageProducts from './pages/ManageProducts';
import AdminLogin from './pages/AdminLogin';
import AdminNavbar from './components/AdminNavbar';
import EditProduct from './pages/EditProduct';
import EditUser from './pages/EditUser';

// Create a MaterialUI theme instance.
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-gallery" element={<ProductGallery />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit-account" element={<EditAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/edit-user/:id" element={<EditUser />} />
          <Route path="/admin/manage-products" element={<ManageProducts />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
