import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Home from '../home/Home';
import Aboutpage from '../Aboutpage';
import Pricepage from '../Pricepage';
import Contactpage from '../Contactpage';
import Team from '../team/Team';
import Screenshort from '../screenshort/Screenshort';
import Servicepage from '../Servicepage';
const Page = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path='//Screenshots' element={<Screenshort/>}/>
        <Route path='/pricing' element={<Pricepage/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/services' element={<Servicepage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Page