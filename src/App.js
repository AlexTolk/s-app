import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <div className='nav-container container'>
        <nav>
          <ul>
            <li><Link to={'/home'} className='link'>Main</Link></li>
            <li><Link to={'/about'} className='link'>About</Link></li>
            <li><Link to={'/contacts'} className='link'>Contacts</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}


export default App;
