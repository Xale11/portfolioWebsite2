import './App.css';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Context from './context/context';
import { useStateContext } from './context/context';
import { Link } from 'react-router-dom';

function App() {

  const {showMenu, setShowMenu, scrollHome, setScrollHome, scrollAbout, setScrollAbout, scrollServices, setScrollServices, scrollContact, setScrollContact} = useStateContext()

  return (
    <div className="App">
      {showMenu && 
      <div className='menu'>
        <Link to="/projects" className="menuLink" onClick={() => {setShowMenu(false)}}>Projects</Link>
        <div className="menuLink" onClick={() => {setShowMenu(false); setScrollAbout(true)}}>About</div>
        <div className="menuLink" onClick={() => {setShowMenu(false); setScrollServices(true)}}>Services</div>
        <div className="menuLink" onClick={() => {setShowMenu(false); setScrollContact(true)}}>Contact</div>
        <div className="closeMenu" onClick={() => {setShowMenu(false)}}>Close Menu</div>
      </div>
      }
      <Home/>
      <Projects/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
}

export default App;
