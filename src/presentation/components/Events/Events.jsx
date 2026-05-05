import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import useEvents from '../../hooks/useEvents';
import { DataSource } from '../../../core/enums/DataSource';
import './Events.css';

const EventMosaic = ({ images, onImageClick }) => {
  const displayImages = images.slice(0, 4);
  const remaining = images.length - 4;

  return (
    <div className={`event-mosaic mosaic-${Math.min(images.length, 4)}`}>
      {displayImages.map((img, idx) => (
        <div 
          key={idx} 
          className="mosaic-item"
          onClick={() => onImageClick(idx)}
        >
          <img src={img} alt="" />
          {idx === 3 && remaining > 0 && (
            <div className="mosaic-overlay">
              <span>+{remaining}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Events() {
  const { lang } = useAppContext();
  const { events, loading } = useEvents(DataSource.LOCAL);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const openGallery = (event, idx = 0) => {
    setSelectedEvent(event);
    setCurrentImageIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % selectedEvent.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  };

  return (
    <section id="events" className="events" ref={ref}>
      <div className="events-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05</span>
          <h2 className="section-title">{lang === 'pt' ? 'Eventos' : 'Events'}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="events-grid">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="event-card shimmer" style={{ height: '350px', borderRadius: '8px' }}></div>
            ))
          ) : (
            events.map((event, index) => (
              <motion.div 
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventMosaic 
                  images={event.images} 
                  onImageClick={(idx) => openGallery(event, idx)} 
                />
                <div className="event-info">
                  <div className="event-meta">
                    <span className="event-date">
                      <CalendarIcon size={14} /> {event.date}
                    </span>
                    <span className="event-location">
                      <MapPin size={14} /> {event.location[lang]}
                    </span>
                  </div>
                  <h3 className="event-title">{event.title[lang]}</h3>
                  <p className="event-description">{event.description[lang]}</p>
                  <button className="view-gallery-btn" onClick={() => openGallery(event)}>
                    {lang === 'pt' ? 'Ver Galeria' : 'View Gallery'}
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <button className="modal-close" onClick={closeGallery}><X size={32} /></button>
            
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="nav-btn prev" onClick={prevImage}><ChevronLeft size={48} /></button>
              
              <div className="modal-image-container">
                <motion.img 
                  key={currentImageIdx}
                  src={selectedEvent.images[currentImageIdx]} 
                  alt=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="image-counter">
                  {currentImageIdx + 1} / {selectedEvent.images.length}
                </div>
              </div>

              <button className="nav-btn next" onClick={nextImage}><ChevronRight size={48} /></button>
            </div>
            
            <div className="modal-footer">
              <h3>{selectedEvent.title[lang]}</h3>
              <p>{selectedEvent.location[lang]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
