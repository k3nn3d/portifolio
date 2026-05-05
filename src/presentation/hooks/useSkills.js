import { useState, useEffect } from 'react';
import { LocalSkillRepository } from '../../data/repositories/LocalSkillRepository';
import { WordPressSkillRepository } from '../../data/repositories/WordPressSkillRepository';
import { DataSource } from '../../core/enums/DataSource';

const useSkills = (source = DataSource.LOCAL) => {
  const [skills, setSkills] = useState({
    mobile: [],
    backend: [],
    frontend: [],
    tools: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const repository = source === DataSource.WORDPRESS 
        ? new WordPressSkillRepository('https://your-wordpress-site.com')
        : new LocalSkillRepository();
      
      const data = await repository.getSkills();
      setSkills(data);
      setLoading(false);
    };

    fetchSkills();
  }, [source]);

  return { skills, loading };
};

export default useSkills;
