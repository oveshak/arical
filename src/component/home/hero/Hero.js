import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section class="hero_section container" id="home">
        <div>
        <div className="box ">
         
         <div class="left_side">
            <h2>familiraize your creative application</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              in soluta ea corporis blanditiis aliquam animi voluptatum dolor
              est vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptatibus delectus id ducimus atque corrupti placeat
              nihil ipsum, eos illum modi quibusdam. Dignissimos ipsum amet quos
              fuga odit architecto soluta.
            </p>

            <button>download</button>
          </div>
          <div className="right_side">
          <img src="./images/pc-banner.png" alt="" className="img1"/>
          </div>
         </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
