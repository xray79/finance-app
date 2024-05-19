import React, { FC } from 'react';
import './HomePage.css';
import Hero from '../../Components/Hero/Hero';

interface HomePageProps { }

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage">
    <Hero />
  </div>
);

export default HomePage;
