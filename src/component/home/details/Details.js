import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./details.css"
import { details } from '../../data/Data'
const Details = () => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
        <div className='detail container'>
        <div className='details  '>
            <div className='box1'>
                {
                    details.map((item,index)=>(
                        
                       <div className='box' data-aos="fade-up"
                       data-aos-anchor-placement="top-center" key={index}>
                       <div> <img src={item.icon} alt=''/></div>
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <button className='btn'>{item.btn}</button>
                       </div>
                        
                    ))
                }
            </div>
        </div>

        </div>
    </>
  )
}

export default Details