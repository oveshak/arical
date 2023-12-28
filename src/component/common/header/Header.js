import React, { useState } from "react";
import "./header.css"
import { nav } from "../../data/Data";
import { NavLink } from "react-router-dom";

import {  FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
const Header = () => {
  const [navlist, setNavlist] = useState(false);
 
  return (
    <>
    <header className="container">
      <div className=" flex">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="nav">
          <ul className={navlist ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <NavLink to={list.path}>{list.text}</NavLink>
              </li>
            ))}
            <p className="btn1">
            get support
          </p>
          </ul>
        </div>

        

        <div className="toggle">
          <button onClick={() => setNavlist(!navlist)}>
            {navlist ? <FaTimes /> : <FaAlignJustify />}
          </button>
        </div>
      </div>
    </header>
  
  </>
  )
}

export default Header