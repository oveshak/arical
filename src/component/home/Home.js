import React from 'react'

import Hero from '../home/hero/Hero';
import About from '../home/about/About';
import Details from '../home/details/Details';
import Easystep from '../home/easystep/Easystep';
import Price from '../home/price/Price';
import Contact from '../home/contact/Contact';
import Service from './services/Service';

const Home = () => {
  return (
    <>
    
    <Hero/>
    <About/>
    <Details/>
    <Service/>
    <Easystep/>
    <Price/>
    <Contact/>
   
    
    </>
  )
}

export default Home