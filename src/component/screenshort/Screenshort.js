import React from 'react'
import Back from '../common/back/Back'
import { screenshort } from '../data/Data'
import "./screenshort.css"
const Screenshort = () => {
  return (
    <>
    <Back title="Screeenshots"/>
    <div className='container'>
        <h1 className='header-screenshort'>Screeenshots</h1>
        <div className='divider'></div>
        <div className='screenshort'>
            {
                
              screenshort.map((item)=>(
                <div className='ssbox'>
                    <img src={item.cover} alt=''/>
                    
                </div>
              ))
            }
        </div>
    </div>
    </>
  )
}

export default Screenshort