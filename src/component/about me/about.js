import React from 'react'
import './aboutme.css';
import { FaDownload, FaHorizontalLine } from 'react-icons/fa'
export default function About() {
    return (
        <div className='about'>
          <h1>
            <span>About Me </span>

            
         </h1>
            <div className='aboutPara'>
               <div className='firstdiv'> My name is Promise and i am a web developer currently based in lagos Nigeria.</div>
  <div> I am passionate about creating intuitive and dynamic user experiences.My main interests lie</div> on new technologies and bringing unique ideas into life by building highly functional websites<div> and applications.Contributing to the creation of high quality products that are user centered is what drives my work ethic</div> 
  
   <div className='lastdiv'>I am a problem solver with great attention to detail and creativity, and I am always learning new technologies <div></div> and methodologies in order to help businesses grow.</div>
   
           </div>
           <button><a href='./Ume Ngozi cv.pdf'>Download my Cv</a><span><FaDownload/></span></button>
        </div>
    )
}
