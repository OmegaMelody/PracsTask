import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../sections/Hero/Hero';
import AboutSection from '../sections/AboutSection/AboutSection';
import Services from '../sections/Services/Services';
import Portfolio from '../sections/Portfolio/Portfolio';
import Skills from '../sections/Skills/Skills';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <Portfolio />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
