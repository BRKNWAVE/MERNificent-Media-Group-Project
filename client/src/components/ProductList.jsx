import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { products } from '../data/data';

// Styles for the Product Gallery component using styled-components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
`;

// Displays a list of products using the Product component and pulls data from the products array in data.js
const ProductList = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProductList;
