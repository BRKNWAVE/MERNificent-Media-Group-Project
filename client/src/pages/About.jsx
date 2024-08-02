import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from '@emotion/styled';

// Styles for the About page using Emotion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Content = styled.div`
  max-width: 800px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

// Basic Lorem text and wrapper to display on the About page
const About = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Content>
          <Title>About Us</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
          <Text>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend. Donec ac diam vel arcu vestibulum lacinia.
          </Text>
          <Text>
            Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi cursus, ut pharetra erat consequat. Nullam quis risus eget urna cursus dignissim. Integer tincidunt arcu et turpis suscipit, ac semper quam consequat.
          </Text>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default About;
