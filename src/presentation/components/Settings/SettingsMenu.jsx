import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Languages, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './SettingsMenu.css';

const SettingsMenu = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, lang, toggleLang } = useAppContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="settings-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="settings-menu"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="settings-header">
              <h3>{lang === 'pt' ? 'Configurações' : 'Settings'}</h3>
              <button onClick={onClose}><X size={20} /></button>
            </div>
            
            <div className="settings-options">
              <div className="setting-item">
                <div className="setting-info">
                  <Languages size={20} />
                  <span>{lang === 'pt' ? 'Idioma' : 'Language'}</span>
                </div>
                <button className="setting-toggle" onClick={toggleLang}>
                  {lang === 'pt' ? 'Português' : 'English'}
                </button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{lang === 'pt' ? 'Tema' : 'Theme'}</span>
                </div>
                <button className="setting-toggle" onClick={toggleTheme}>
                  {theme === 'light' ? (lang === 'pt' ? 'Claro' : 'Light') : (lang === 'pt' ? 'Escuro' : 'Dark')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu;
