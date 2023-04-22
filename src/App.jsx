import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact/Contact';
import './app.scss'

const App = () => {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App