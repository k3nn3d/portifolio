export class Project {
  constructor({ id, title, description, image, link, github, tags }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.github = github;
    this.tags = tags;
  }
}
