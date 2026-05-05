import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../../core/i18n/translations';
import useSkills from '../../hooks/useSkills';
import { DataSource } from '../../../core/enums/DataSource';
import './Skills.css';

export default function Skills() {
  const { lang } = useAppContext();
  const { skills, loading } = useSkills(DataSource.LOCAL);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = translations.skills[lang];
  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="skill-category shimmer" style={{ height: '200px', borderRadius: '8px' }}></div>
            ))
          ) : (
            Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              >
                <h3 className="category-title">{t.categories[category]}</h3>
                <div className="skills-list">
                  {items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + catIndex * 0.1 + index * 0.05 
                      }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
