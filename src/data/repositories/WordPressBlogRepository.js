import { IBlogRepository } from '../../core/repositories/IBlogRepository';

export class WordPressBlogRepository extends IBlogRepository {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    try {
      // In a real scenario:
      // const response = await fetch(`${this.baseUrl}/wp-json/wp/v2/posts?_embed`);
      // const data = await response.json();
      
      return [
        {
          id: 101,
          title: { pt: 'Post do WordPress', en: 'WordPress Post' },
          excerpt: { pt: 'Conteúdo vindo da API do WordPress...', en: 'Content coming from WordPress API...' },
          date: '2026-05-01',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
        }
      ];
    } catch (error) {
      console.error('Error fetching blog from WordPress:', error);
      return [];
    }
  }
}
