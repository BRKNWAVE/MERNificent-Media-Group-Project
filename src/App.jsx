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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;