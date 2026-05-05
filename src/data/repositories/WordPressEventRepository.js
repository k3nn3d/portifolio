import { IEventRepository } from '../../core/repositories/IEventRepository';

export class WordPressEventRepository extends IEventRepository {
  constructor(baseUrl) {
    super();
    this.baseUrl = baseUrl;
  }

  async getEvents() {
    try {
      // In a real scenario:
      // const response = await fetch(`${this.baseUrl}/wp-json/wp/v2/events?_embed`);
      // const data = await response.json();
      
      return [
        {
          id: 101,
          title: { pt: 'Evento WordPress', en: 'WordPress Event' },
          location: 'Vila de Luanda',
          date: '2026-06-10',
          description: { pt: 'Evento sincronizado com o CMS.', en: 'Event synchronized with the CMS.' },
          images: [
            'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop'
          ]
        }
      ];
    } catch (error) {
      console.error('Error fetching events from WordPress:', error);
      return [];
    }
  }
}
