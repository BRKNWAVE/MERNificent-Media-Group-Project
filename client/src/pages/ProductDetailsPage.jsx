import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <Navbar />
      <ProductDetails productId={id} />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;