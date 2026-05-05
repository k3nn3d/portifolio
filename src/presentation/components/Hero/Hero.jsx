import { motion } from 'framer-motion';
import avatar from '../../../assets/avatar/terencio.jpeg';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../../core/i18n/translations';
import './Hero.css';

export default function Hero() {
  const { lang } = useAppContext();
  const t = translations.hero[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.p className="hero-greeting" variants={itemVariants}>
            {t.greeting}
          </motion.p>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Terêncio Gaspar
          </motion.h1>
          
          <motion.div className="hero-role-container" variants={itemVariants}>
            <div className="hero-role-line"></div>
            <h2 className="hero-role">{t.role}</h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            {t.description}
          </motion.p>

          <motion.div className="hero-skills" variants={itemVariants}>
            {t.skills.map((skill, index) => (
              <motion.span 
                key={skill}
                className="hero-skill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              {lang === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="btn btn-secondary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.viewProjects}
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a 
              href="https://github.com/k3nn3d"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/terencio-correia-gaspar-15b44a238"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:terenciocorreiagaspar@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="tel:+244937539143"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-image-container">
            <motion.div 
              className="hero-image-border"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="hero-image">
              <div className="hero-image-placeholder">
                <img 
                  src={avatar} 
                  alt="" 
                  className="avatar-image"
                />
                <div className="avatar-overlay">
                  <span className="tg-text">TG</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ 
            height: ['0%', '100%', '0%'],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
