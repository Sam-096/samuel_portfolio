import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;