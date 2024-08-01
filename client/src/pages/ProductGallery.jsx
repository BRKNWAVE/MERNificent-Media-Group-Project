import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const ProductGallery = () => {
  return (
      <div className="container">
        <Navbar/>
        <ProductList/>
        <Footer/>
      </div>
  );
};

export default ProductGallery;
