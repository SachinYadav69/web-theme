
import React from 'react';
import Navbar from './Components/Navbar/Navbar'; 
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Title subTitle='OUR PROGRAM' title='what we offer'/>
      <div className="container">
        <Programs/>
        <About/>
           {/* test changes */}
        <Title subTitle='Gallery' title='Campus Tour'/>
        <Campus/>
        
        <Title subTitle='Testimonials' title='What students says'/>
        <Testimonials/>

        <Title subTitle='Contact Us' title='Get in touch with us'/>
        <Contact/>
      </div>
  
    </div>
  );
};

export default App;