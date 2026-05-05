import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import useBlog from '../../hooks/useBlog';
import { DataSource } from '../../../core/enums/DataSource';
import './Blog.css';

export default function Blog() {
  const { lang } = useAppContext();
  const { posts, loading } = useBlog(DataSource.LOCAL);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="blog-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="section-title">Blog</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="blog-grid">
          {loading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="blog-card shimmer" style={{ height: '400px', borderRadius: '8px' }}></div>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="blog-image" 
                  style={{ 
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }} 
                />
                <div className="blog-header">
                  <h3 className="blog-title">{post.title[lang]}</h3>
                  <span className="blog-date">{post.date}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt[lang]}</p>
                <a href={`${post.link}`} target="_blank" className="read-more">
                  {lang === 'pt' ? 'Ler mais' : 'Read more'} →
                </a>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
