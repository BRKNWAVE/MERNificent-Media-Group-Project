import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import ProductGallery from './pages/ProductGallery';

// Create a MaterialUI theme instance.
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ProductGallery />
      </div>
    </ThemeProvider>
  );
};

export default App;
