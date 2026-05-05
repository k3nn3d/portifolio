import { useState, useEffect } from 'react';
import { LocalProjectRepository } from '../../data/repositories/LocalProjectRepository';
import { WordPressProjectRepository } from '../../data/repositories/WordPressProjectRepository';
import { DataSource } from '../../core/enums/DataSource';

const useProjects = (source = DataSource.LOCAL) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const repository = source === DataSource.WORDPRESS 
        ? new WordPressProjectRepository('https://your-wordpress-site.com')
        : new LocalProjectRepository();
      
      const data = await repository.getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, [source]);

  return { projects, loading };
};

export default useProjects;
