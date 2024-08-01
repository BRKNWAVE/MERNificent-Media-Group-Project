import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';

// Home Page with Carousel, Navbar, and Footer components
const Home = () => {
  return (
      <div className="container">
        <Navbar/>
        <HeroCarousel/>
        <Footer/>
      </div>
  );
};

export default Home;
