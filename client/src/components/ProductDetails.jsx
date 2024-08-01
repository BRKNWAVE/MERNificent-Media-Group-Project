import React from 'react';
import { products } from '../data/data';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Img = styled.img`
  max-width: 65%;
  height: 100%;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ProductDetails = ({ productId }) => {
  // Make sure productId is a string
  const productIdStr = String(productId);
  const product = products.find(p => String(p.id) === productIdStr);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} alt={product.name} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
