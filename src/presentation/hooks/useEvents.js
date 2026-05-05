import { useState, useEffect } from 'react';
import { LocalEventRepository } from '../../data/repositories/LocalEventRepository';
import { WordPressEventRepository } from '../../data/repositories/WordPressEventRepository';
import { DataSource } from '../../core/enums/DataSource';

const useEvents = (source = DataSource.LOCAL) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const repository = source === DataSource.WORDPRESS 
        ? new WordPressEventRepository('https://your-wordpress-site.com')
        : new LocalEventRepository();
      
      const data = await repository.getEvents();
      setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, [source]);

  return { events, loading };
};

export default useEvents;
