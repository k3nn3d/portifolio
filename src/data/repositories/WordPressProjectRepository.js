import { IProjectRepository } from '../../core/repositories/IProjectRepository';
import { Project } from '../../core/entities/Project';

export class WordPressProjectRepository extends IProjectRepository {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
  }

  async getProjects() {
    try {
      // In a real scenario, you would fetch from WordPress REST API
      // const response = await fetch(`${this.baseUrl}/wp-json/wp/v2/projects?_embed`);
      // const data = await response.json();
      
      // Mocked data for demonstration
      return [
        new Project({
          id: 1,
          title: 'WP Project 1',
          description: 'Fetched from WordPress',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
          link: '#',
          github: '#',
          tags: ['WordPress', 'PHP']
        })
      ];
    } catch (error) {
      console.error('Error fetching projects from WordPress:', error);
      return [];
    }
  }
}
