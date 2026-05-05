import { ISkillRepository } from '../../core/repositories/ISkillRepository';

export class WordPressSkillRepository extends ISkillRepository {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
  }

  async getSkills() {
    try {
      // In a real scenario:
      // const response = await fetch(`${this.baseUrl}/wp-json/wp/v2/skills?_embed`);
      // const data = await response.json();
      
      // Mocking the expected format
      return {
        mobile: ['Flutter WP', 'Dart WP'],
        backend: ['Laravel WP', 'PHP WP'],
        frontend: ['React WP', 'JavaScript WP'],
        tools: ['Git WP', 'Docker WP']
      };
    } catch (error) {
      console.error('Error fetching skills from WordPress:', error);
      return { mobile: [], backend: [], frontend: [], tools: [] };
    }
  }
}
