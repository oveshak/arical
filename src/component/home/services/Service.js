import React from 'react'
import { services } from '../../data/Data'
import "./services.css"
const Service = () => {
  return (
    <>
    <h1 class="header_text ser">Aaricle <span> Features </span></h1>
    <div className='divider'></div>

    <div className='container'>
        <div className='box3'>
            <div className='left3'>
                {
                    services.map((item)=>(
                        <div className='total'>
                            <div className='icon'>
                            <i className={item.icon}></i>
                            </div>
                            <div className='des'>
                                <h4>{item.title}</h4>
                                <p>{item.subtext}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className='right3'>
                <img src='../images/application_screen.png' alt=''/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Service