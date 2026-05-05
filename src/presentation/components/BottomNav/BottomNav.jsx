import React from 'react';
import { Home, User, Code, Briefcase, Mail, BookOpen, Calendar, Settings } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './BottomNav.css';

const BottomNav = ({ onSettingsClick }) => {
  const { lang } = useAppContext();

  const navItems = [
    { icon: <Home size={20} />, label: lang === 'pt' ? 'Início' : 'Home', href: '#home' },
    { icon: <User size={20} />, label: lang === 'pt' ? 'Sobre' : 'About', href: '#about' },
    { icon: <Briefcase size={20} />, label: lang === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
    { icon: <BookOpen size={20} />, label: 'Blog', href: '#blog' },
    { icon: <Calendar size={20} />, label: lang === 'pt' ? 'Eventos' : 'Events', href: '#events' },
    { icon: <Mail size={20} />, label: lang === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
    { icon: <Settings size={20} />, label: lang === 'pt' ? 'Ajustes' : 'Settings', onClick: onSettingsClick },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item, index) => (
        item.href ? (
          <a key={index} href={item.href} className="bottom-nav-item">
            {item.icon}
            <span>{item.label}</span>
          </a>
        ) : (
          <button key={index} onClick={item.onClick} className="bottom-nav-item">
            {item.icon}
            <span>{item.label}</span>
          </button>
        )
      ))}
    </nav>
  );
};

export default BottomNav;
