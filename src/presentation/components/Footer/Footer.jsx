import { Github, Linkedin, Mail } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './Footer.css';

export default function Footer() {
  const { lang } = useAppContext();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Terêncio<span className="dot">.</span></span>
            <p className="footer-tagline">
              {lang === 'pt' 
                ? 'Desenvolvedor Full Stack' 
                : 'Full Stack Developer'}
            </p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/k3nn3d" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/terencio-correia-gaspar-15b44a238" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:terenciocorreiagaspar@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Terêncio Gaspar. {lang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
