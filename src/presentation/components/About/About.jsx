import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../../core/i18n/translations';
import './About.css';

export default function About() {
  const { lang } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = translations.about[lang];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-intro">{t.intro}</p>
            <p>{t.text1}</p>
            <p>{t.text2}</p>
            <p>{t.text3}</p>
          </motion.div>

          <motion.div 
            className="about-expertise"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>{t.expertise}</h3>
            <ul className="expertise-list">
              {t.areas.map((area, index) => (
                <motion.li 
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <span className="expertise-marker"></span>
                  {area}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
