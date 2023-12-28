import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About2 = () => {
  useEffect(()=>{
    AOS.init( {duration:"1000"});
  })
  return (
    <>
    <div className='about-container container ' >
        <div className='box1 flex'>
           
            <div className='left' data-aos="fade-right" data-aos-anchor-placement="center-center">
                <img src='../images/ser2.png' alt=''/>
            </div>
            <div className='right' data-aos="fade-left" data-aos-anchor-placement="center-center">
                <h2>Unique App With Different Features</h2>
                <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Ea, Commodi Sunt. Accusamus Asperiores Nulla, Quia Cum Sunt Dolor Provident Animi Qui Repudiandae, Consequatur Repellendus Nihil Aliquam Cumque Ut Omnis Recusandae, Deserunt Dignissimos Laboriosam.</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default About2