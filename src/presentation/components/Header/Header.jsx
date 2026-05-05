import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, Sun, Moon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import SettingsMenu from '../Settings/SettingsMenu';
import { translations } from '../../../core/i18n/translations';
import './Header.css';

export default function Header() {
  const { lang, theme, toggleTheme } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  const t = translations.header[lang];

  const menuItems = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.projects, href: '#projects' },
    { name: t.blog, href: '#blog' },
    { name: t.events, href: '#events' },
    { name: t.contact, href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-container">
          <motion.a 
            href="#home" 
            className="logo"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="logo-name">Terêncio</span>
            <span className="logo-dot">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              className="settings-toggle-btn"
              onClick={toggleSettings}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{ marginLeft: '20px', color: 'var(--secondary)' }}
            >
              <Settings size={20} />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="menu-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleMenu}
                />
                <motion.nav
                  className="nav-mobile"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  <div className="nav-mobile-content">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="nav-mobile-link"
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    
                    <motion.button
                      className="nav-mobile-link settings-link"
                      onClick={() => { toggleMenu(); toggleSettings(); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: menuItems.length * 0.05 }}
                    >
                      <Settings size={20} />
                      {lang === 'pt' ? 'Configurações' : 'Settings'}
                    </motion.button>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} />
    </>
  );
}
