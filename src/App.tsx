import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;