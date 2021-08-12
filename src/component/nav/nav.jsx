import "./nav.css";
import { FaBars } from "react-icons/fa";

import React from 'react'

export default function nav() {
  return (
       <nav>
      <ul>
        <li className='logo'>Welcome</li>
        <li className='btn'>
         <i> <FaBars /></i>
        </li>
        <li className='nav'> <a href="#home">About</a> </li>
        <li className='nav'> <a href="#about">Service</a></li>
        <li className='nav'> <a href="#project">Project</a> </li>
        <li className='nav'> <a href="#contact">Contact</a></li>
      </ul>
  
    </nav>
  )
}


