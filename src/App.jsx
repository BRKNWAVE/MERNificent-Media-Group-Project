import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import ProductGallery from './pages/ProductGallery';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';

// Create a MaterialUI theme instance.
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
