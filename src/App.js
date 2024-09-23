import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Hooks from './components/Hooks/Hooks';

function App() {
  return (
    <div className="App">
      <div className='nav-container container'>
        <nav>
          <ul>
            <li><Link to={'/home'} className='link link__main'>Main</Link></li>
            <li><Link to={'/about'} className='link link__about'>About</Link></li>
            <li><Link to={'/contacts'} className='link link__contacts'>Contacts</Link></li>
            <li><Link to={'/hooks'} className='link link__contacts'>Hooks</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
    </div>
  );
}


export default App;
