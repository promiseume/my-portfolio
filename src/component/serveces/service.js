import React from 'react'
import './service.css';
import { FaLaptop, FaMobileAlt,FaSearchLocation } from 'react-icons/fa'
export default function Service() {
    return (
        <div className='service'>
            <h1>Services</h1>
            <div className='serv'>
                <div>
                <i><FaLaptop/></i>
                <h3>Web Development</h3>
            </div>
            <div>
              <i><FaMobileAlt/></i>  
                <h3>Responsive Design</h3>
            </div>
            <div>
             <i>  < FaSearchLocation/></i>
               <h3>SEO</h3>
            </div>
            </div>
        </div>
    )
}
