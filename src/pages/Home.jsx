import React from 'react';
import Hero from '../components/Hero';
// import Hero from '../components/AnimatedHero'; // CSS animation version
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';
import Insights from '../components/Insights';
import Contact from '../components/Contact';
import AnimatedHero from '../components/AnimatedHero';
import ChatBot from '../components/ChatBot';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <AnimatedHero/> */}
      <Services />
      <Industries />
      <About />
      <Insights />
      <Contact />
      <ChatBot/>
    </main>
    
  );
};

export default Home;