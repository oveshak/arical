import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { easystep } from "../../data/Data";
import "./easystep.css";
const Easystep = () => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
      <div className="easy container">
        <div class="header_divider">
          <h1 class="header_text">Easy Steps</h1>
          <div class="divider"></div>
        </div>
        <div className="box1">
        {easystep.map((item) => (
          <div className="box">
            <i className={item.icon} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" ></i>
            <p data-aos="fade-up"
     data-aos-anchor-placement="top-center">{item.title}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Easystep;
