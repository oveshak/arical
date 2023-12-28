import React, { useEffect } from 'react'
import Back from '../common/back/Back'
import "./team.css"
import { team } from '../data/Data'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Team = () => {
  useEffect(()=>{
    AOS.init( {duration:"100"});
  })
  return (
    <>
    <Back title="team"/>
    
    <div className='container'>
        <h1 className='header-team'>Our Team</h1>
        <div className='divider'></div>
        <div className='team' >
            {
                
              team.map((item)=>(
                <div className='team-box'>
                    <img src={item.cover} alt='' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                    <h1 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                        {item.title}
                    </h1>
                    <p data-aos="fade-up"
     data-aos-duration="3000">
                        {item.subtitle}
                    </p>
                </div>
              ))
            }
        </div>
    </div>
    
    </>
  )
}

export default Team