import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import useProjects from '../../hooks/useProjects';
import { translations } from '../../../core/i18n/translations';
import { DataSource } from '../../../core/enums/DataSource';
import './Projects.css';

export default function Projects() {
  const { lang } = useAppContext();
  const { projects, loading } = useProjects(DataSource.LOCAL); // Can be changed to DataSource.WORDPRESS
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = translations.projects[lang];
  const [activeFilter, setActiveFilter] = useState('all');
  const [imagesError, setImagesError] = useState({});

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleImageError = (id) => {
    setImagesError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(t.filters).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="project-card shimmer" style={{ height: '300px', borderRadius: '8px' }}></div>
            ))
          ) : (
            filteredProjects.map((project, index) => {
              const imageUrl = imagesError[project.id]
                ? 'https://placehold.co/600x400/2a2a2a/ffffff?text=Preview+indispon%C3%ADvel'
                : project.image;

              return (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />

                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          className="project-icon"
                          aria-label="View code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          className="project-icon"
                          aria-label="View project"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-description">
                    {typeof project.description === 'object' ? project.description[lang] : project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <img
                    src={imageUrl}
                    alt=""
                    style={{ display: 'none' }}
                    onError={() => handleImageError(project.id)}
                  />
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}