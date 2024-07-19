import { SearchOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  ${Container}:hover & {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${Container}:hover & {
    opacity: 1;
  }
`;

const Icon = styled.div`
  color: black;
  font-size: 32px;
`;

const Product = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Container>
        <Overlay />
        <Circle>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Circle>
        <Image src={item.img} alt={`Product ${item.id}`} />
      </Container>
    </Link>
  );
};

export default Product;