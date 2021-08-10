import React from 'react'
import './contact.css';
import { FaMapMarkerAlt,FaEnvelope,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa'
export default function Contact() {
    return (
        <div className='contact'>
            <h2>Let Work Together</h2>
            <p>Do you have a project in mind or would you like me to join your team? Don't hesitate to contact me:</p>
            <div className='mycontact'>
               <div>
               <i> <FaMapMarkerAlt/></i>
                <h3>Lagos,Nigeria</h3>
                </div>
                <div> <h1></h1></div>
                <div>
                   <i><FaEnvelope/></i> 
                    <h3>Contact@ <a url='ngoziume1@gmail.com'></a> ngoziume1@gmail.com</h3>
                </div>
            </div>
            <h4>Social media</h4>
            <div className='social'>
               <h1><a url='promyzng@twitter.com'><FaTwitterSquare/></a></h1>
               <h1><a url='promiseume@github.com'><FaGithubSquare/></a></h1>
            </div>
        </div>
    )
}
