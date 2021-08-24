import { BrowserRouter as Router,Route } from 'react-router-dom'
import Nav from './component/nav/nav'
import Header from './component/Header/header'
import About from './component/about me/about'
import Service from './component/serveces/service'
import Tech from './component/tech/technology'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

function App() {
  return (
    <div>
      <Router>
     <Nav/>
   <header><Header/></header>
  <section><About/></section>
  <section><Service/></section>
  <section><Tech/></section>
  <section><Contact/></section>
   <footer><Footer/></footer>
     
     </Router>
    </div>
  );
}

export default App;
