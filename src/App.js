import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 text-gray dark:text-white transition-color duration-300'>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
