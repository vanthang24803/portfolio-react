import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Services/Service';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Testmonial from './components/Testmonial/Testmonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testmonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
