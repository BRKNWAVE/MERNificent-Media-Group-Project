import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styled from '@emotion/styled';
import { carouselItems } from '../data/data';


// Styles for the HeroCarousel component using Emotion
const Container = styled.div`
  width: 100%;
  height: 87vh; /* required to have the entire page fit on a 1080p screen without scrolling, change as needed... looks nice*/
  display: flex;
  justify-content: center; 
  align-items: center; 
  background-color: #F7F7F7;
  position: relative;
  overflow: hidden; /* Additional carousel images that do not fit in the container will be hidden */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: transform 1.0s ease;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 50px 0px;
  text-transform: uppercase;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 50px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
`;

const ShopLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit text color from parent component */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 200px;
  object-fit: cover;
  
`;

// Use a state variable to keep track of the current index of the carousel and update it when the user clicks on the left or right arrow
// Use the handleClick function to update the carouselIndex state variable based on the direction of the arrow clicked
// If the direction is "left" and the current index is greater than -1 (the first image), then decrement the index by 1
// If the direction is "right" and the current index is less than 1 (the last image), then increment the index by 1
// This will allow the carousel to loop through the images in a circular manner
const HeroCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(-1);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCarouselIndex(carouselIndex > -1 ? carouselIndex - 1 : 1);
    } else {
      setCarouselIndex(carouselIndex < 1 ? carouselIndex + 1 : -1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardDoubleArrowLeftIcon />
      </Arrow>
      <Wrapper index={carouselIndex}>
        {carouselItems.map((item) => (
          <Carousel key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description dangerouslySetInnerHTML={{ __html: item.desc }} />
              <ShopLink to="/product-gallery">
                <Button>Shop Now</Button>
              </ShopLink>
            </InfoContainer>
          </Carousel>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardDoubleArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default HeroCarousel;
