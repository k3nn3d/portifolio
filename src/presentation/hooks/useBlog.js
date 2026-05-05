import { useState, useEffect } from 'react';
import { LocalBlogRepository } from '../../data/repositories/LocalBlogRepository';
import { WordPressBlogRepository } from '../../data/repositories/WordPressBlogRepository';
import { DataSource } from '../../core/enums/DataSource';

const useBlog = (source = DataSource.LOCAL) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const repository = source === DataSource.WORDPRESS 
        ? new WordPressBlogRepository('https://your-wordpress-site.com')
        : new LocalBlogRepository();
      
      const data = await repository.getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, [source]);

  return { posts, loading };
};

export default useBlog;
