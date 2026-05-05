import { useState } from 'react';
import { AppProvider } from './presentation/context/AppContext';
import Header from './presentation/components/Header/Header';
import Hero from './presentation/components/Hero/Hero';
import About from './presentation/components/About/About';
import Skills from './presentation/components/Skills/Skills';
import Projects from './presentation/components/Projects/Projects';
import Blog from './presentation/components/Blog/Blog';
import Events from './presentation/components/Events/Events';
import Contact from './presentation/components/Contact/Contact';
import Footer from './presentation/components/Footer/Footer';
import BottomNav from './presentation/components/BottomNav/BottomNav';
import SettingsMenu from './presentation/components/Settings/SettingsMenu';

function AppContent() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Events />
        <Contact />
      </main>
      <Footer />
      <BottomNav onSettingsClick={() => setIsSettingsOpen(true)} />
      <SettingsMenu isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
