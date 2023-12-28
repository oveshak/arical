import React from 'react'
import Back from './common/back/Back'
import About from './home/about/About'
import Easystep from './home/easystep/Easystep'
const Aboutpage = () => {
  return (
    <>
    <Back title="About Us"/>

   <div className='aboutpage'>
   <About/>
    <Easystep/>
   </div>

    </>
  )
}

export default Aboutpage