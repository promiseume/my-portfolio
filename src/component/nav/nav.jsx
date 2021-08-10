import './nav.css';
export default function Nav() {
  
  return (
    <nav>
    <div className='headernav'>
      <a href="#Welcome">
       <h1></h1>
      </a>
      </div>
      <button className='btn'>Menu</button>

    
      <ul>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#about">Service</a>
        </li>
        <li>
          <a href="#contact">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
     
    </nav>
  );
}
