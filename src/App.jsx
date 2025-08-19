import {useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';


function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);

  return (
    <main className="bg-[#F5F5DC]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App