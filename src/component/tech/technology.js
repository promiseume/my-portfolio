import { FaHtml5,FaCss3Alt,FaBootstrap,FaJsSquare,FaReact,FaGitAlt } from "react-icons/fa"
import './tech.css';
export default function Tech() {
    return (
        <div className='techandtools'>
         <h1> Technologies and Tools</h1> 
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
            <div>
            <i>  <FaReact/></i>
                <h3>React</h3>
            </div>
            <div>
            <i> <FaGitAlt/></i>
                <h3>Git</h3>
            </div>
            </div>
        </div>
    )
}
