import { ISkillRepository } from '../../core/repositories/ISkillRepository';

export class LocalSkillRepository extends ISkillRepository {
  async getSkills() {
    return {
      mobile: ['Flutter', 'Dart', 'BLoC', 'Provider', 'GetX', 'Firebase', 'SQLite', 'REST APIs'],
      backend: ['Laravel', 'PHP', 'Node.js', 'Express','.Net', 'C#','MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
      tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'Agile/Scrum', 'CI/CD']
    };
  }
}
