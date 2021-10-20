import { FaHtml5,FaCss3Alt,FaBootstrap,FaJsSquare,FaReact,FaGitAlt,FaSass } from "react-icons/fa"
import './tech.css';
export default function Tech() {
    return (
        <div className='techandtools'>
         <h1 id='tech'> Technologies and Tools</h1> 
            <div className='tech'>
            <div>
               <i> <FaHtml5/></i>
                <h3>Html</h3>
            </div>
            <div>
                <i><FaCss3Alt/></i>
                <h3>CSS</h3>
            </div>
            <div>
            <i> <FaBootstrap/></i>
                <h3>Bootstrap</h3>
            </div>
            <div>
            <i>  <FaJsSquare/></i>
                <h3>Javascript</h3>
            </div>
            </div>
            <div className='tech'>
            <div>
            <i>  <FaReact/></i>
                <h3>React</h3>
            </div>
            <div>
                <i><FaSass/></i>
                <h3>Sass</h3>
            </div>
            <div>
            <i> <FaGitAlt/></i>
                <h3>Git</h3>
            </div>
            <div>
            <i><img src="assets/icons/mongo-icon-pink.png" alt="MongoDB"/></i>
                <h3>MongoDB</h3>
            </div>
            </div>
            
        </div>
    )
}
