import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../../core/i18n/translations';
import './Contact.css';

export default function Contact() {
  const { lang } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = translations.contact[lang];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // WordPress Contact Form 7 or custom endpoint example
    // Replace YOUR_WP_URL and YOUR_FORM_ID with actual values
    const WP_ENDPOINT = 'https://your-wordpress-site.com/wp-json/contact-form-7/v1/contact-forms/YOUR_FORM_ID/feedback';
    
    const body = new FormData();
    body.append('your-name', formData.name);
    body.append('your-email', formData.email);
    body.append('your-message', formData.message);

    try {
      // In a real scenario, you would use fetch(WP_ENDPOINT, { method: 'POST', body })
      // For demonstration, we simulate a delay and success
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data sent:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">06</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.subtitle}
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="info-item">
              <Mail size={20} />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${t.info.email}`}>{t.info.email}</a>
              </div>
            </div>

            <div className="info-item">
              <Phone size={20} />
              <div>
                <h4>{t.form.name === 'Nome' ? 'Telefone' : 'Phone'}</h4>
                <a href={`tel:${t.info.phone.replace(/\s/g, '')}`}>{t.info.phone}</a>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={20} />
              <div>
                <h4>{t.form.name === 'Nome' ? 'Localização' : 'Location'}</h4>
                <p>{t.info.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                placeholder={t.form.name}
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                placeholder={t.form.email}
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <textarea 
                rows="6"
                placeholder={t.form.message}
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className={`submit-btn ${status}`}
              whileHover={status === 'idle' ? { y: -2 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && <><Send size={18} /> {t.form.send}</>}
              {status === 'sending' && (lang === 'pt' ? 'Enviando...' : 'Sending...')}
              {status === 'success' && (lang === 'pt' ? 'Sucesso!' : 'Success!')}
              {status === 'error' && (lang === 'pt' ? 'Erro ao enviar' : 'Error sending')}
            </motion.button>
            
            {status === 'success' && (
              <motion.p 
                className="status-msg success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {lang === 'pt' ? 'Sua mensagem foi enviada com sucesso!' : 'Your message has been sent successfully!'}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
