import { IProjectRepository } from '../../core/repositories/IProjectRepository';
import { Project } from '../../core/entities/Project';

const getScreenshotUrl = (url) => {
  if (!url || url === '#') return null;
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;
};

export class LocalProjectRepository extends IProjectRepository {
  async getProjects() {
    return [
      new Project({
        id: 1,
        title: 'Neide Passos',
        description: {
          pt: 'Site institucional para professora de yoga, com informações sobre aulas, filosofia e contato.',
          en: 'Institutional website for a yoga teacher, with information about classes, philosophy and contact.'
        },
        tags: ['WordPress', 'Yoga', 'Responsive'],
        category: 'web',
        link: 'https://neidepassos.com',
        github: null,
        image: getScreenshotUrl('https://neidepassos.com')
      }),
      new Project({
        id: 2,
        title: 'Mari Mari Glamour',
        description: {
          pt: 'E-commerce de joalharia e perfumaria, com catálogo de produtos e integração de pagamentos.',
          en: 'Jewelry and perfumery e-commerce, with product catalog and payment integration.'
        },
        tags: ['WordPress', 'WooCommerce', 'E-commerce'],
        category: 'web',
        link: 'https://marimariglamour.com/',
        github: null,
        image: getScreenshotUrl('https://marimariglamour.com/')
      }),
      new Project({
        id: 3,
        title: 'Jormos',
        description: {
          pt: 'Site corporativo para empresa de proteção e segurança, apresentando serviços e informações de contato.',
          en: 'Corporate website for a protection and security company, presenting services and contact information.'
        },
        tags: ['WordPress', 'Corporate', 'Security'],
        category: 'web',
        link: 'https://jormosproteccao.com/',
        github: null,
        image: getScreenshotUrl('https://jormosproteccao.com/')
      }),
      new Project({
        id: 4,
        title: 'AngoFuros',
        description: {
          pt: 'Site para empresa de construção civil, destacando projetos, serviços e portfólio.',
          en: 'Website for a civil construction company, highlighting projects, services and portfolio.'
        },
        tags: ['WordPress', 'Construction', 'Corporate'],
        category: 'web',
        link: 'https://angofuros.co.ao',
        github: null,
        image: getScreenshotUrl('https://angofuros.co.ao')
      }),
      new Project({
        id: 5,
        title: 'Rama Angola',
        description: {
          pt: 'Site institucional para empresa de construção civil, com foco em projetos de infraestrutura.',
          en: 'Institutional website for a civil construction company, focusing on infrastructure projects.'
        },
        tags: ['WordPress', 'Construction', 'Infrastructure'],
        category: 'web',
        link: 'https://ramangola.com',
        github: null,
        image: getScreenshotUrl('https://ramangola.com')
      }),
      new Project({
        id: 6,
        title: 'Sakeni',
        description: {
          pt: 'Website corporativo para apresentação da empresa e serviços.',
          en: 'Corporate website for company presentation and services.'
        },
        tags: ['WordPress', 'Corporate'],
        category: 'web',
        link: 'https://sakeni.co',
        github: null,
        image: getScreenshotUrl('https://sakeni.co')
      }),
      new Project({
        id: 7,
        title: 'Guamb',
        description: {
          pt: 'Site para empresa de engenharia ambiental, com informações sobre soluções sustentáveis e projetos.',
          en: 'Website for an environmental engineering company, with information on sustainable solutions and projects.'
        },
        tags: ['WordPress', 'Environmental Engineering'],
        category: 'web',
        link: 'https://guamb.org/',
        github: null,
        image: getScreenshotUrl('https://guamb.org/')
      }),
      new Project({
        id: 8,
        title: 'Handicapp',
        description: {
          pt: 'Aplicativo de estatísticas desportivas, fornecendo dados em tempo real e análises de jogos.',
          en: 'Sports statistics app, providing real-time data and game analysis.'
        },
        tags: ['Flutter', 'Sports', 'Statistics'],
        category: 'mobile',
        link: 'https://play.google.com/store/apps/details?id=com.bee.handicapp&hl=pt',
        github: null,
        image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Handicapp'
      }),
      new Project({
        id: 9,
        title: 'Zaluni',
        description: {
          pt: 'Plataforma de serviços de beleza, conectando profissionais e clientes para agendamento de serviços.',
          en: 'Beauty services platform, connecting professionals and clients for service scheduling.'
        },
        tags: ['Flutter', 'Beauty', 'Marketplace'],
        category: 'mobile',
        link: 'https://play.google.com/store/apps/details?id=com.zaluni.zaluni_app&hl=pt',
        github: null,
        image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Zaluni'
      }),
      new Project({
        id: 10,
        title: 'NgolaCare',
        description: {
          pt: 'E-commerce mobile para produtos de saúde e farmácia online, com entrega ao domicílio.',
          en: 'Mobile e-commerce for health products and online pharmacy, with home delivery.'
        },
        tags: ['Flutter', 'E-commerce', 'Health'],
        category: 'mobile',
        link: '',
        github: null,
        image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=NgolaCare'
      }),
      new Project({
        id: 11,
        title: 'API RESTful Multi-tenant',
        description: {
          pt: 'API escalável para aplicações multi-tenant com autenticação JWT e documentação completa.',
          en: 'Scalable API for multi-tenant applications with JWT authentication and complete documentation.'
        },
        tags: ['Laravel', 'PostgreSQL', 'JWT', 'Docker'],
        category: 'backend',
        link: '#',
        github: '#',
        image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Backend+API'
      }),
      new Project({
        id: 12,
        title: 'Microservices Architecture',
        description: {
          pt: 'Sistema distribuído com microserviços para processamento de pagamentos e notificações.',
          en: 'Distributed system with microservices for payment processing and notifications.'
        },
        tags: ['Node.js', 'MongoDB', 'RabbitMQ', 'Docker'],
        category: 'backend',
        link: '#',
        github: '#',
        image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Microservices'
      })
    ];
  }
}
