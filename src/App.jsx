// src/App.jsx
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Certifications from './components/sections/Certifications';
import Timeline from './components/sections/Timeline';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="dark:text-gray-100">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;