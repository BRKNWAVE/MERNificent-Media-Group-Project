import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductGallery from './pages/ProductGallery';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import EditAccount from './pages/EditAccount';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';

// Create a MaterialUI theme instance.
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-gallery" element={<ProtectedRoute element={ProductGallery} />} />
          <Route path="/product/:id" element={<ProtectedRoute element={ProductDetailsPage} />} />
          <Route path="/about" element={<ProtectedRoute element={About} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit-account" element={<ProtectedRoute element={EditAccount} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
