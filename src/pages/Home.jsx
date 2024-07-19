import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  return (
      <div className="container">
        <Navbar/>
        <HeroCarousel/>
      </div>
  );
};

export default Home;
