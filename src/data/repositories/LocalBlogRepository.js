import { IBlogRepository } from '../../core/repositories/IBlogRepository';

export class LocalBlogRepository extends IBlogRepository {
  async getPosts() {
    return [
      {
        id: 1,
        title: {
          pt: "O que fazes quando tens um bug?",
          en: "What do you do when you have a bug?"
        },
        excerpt: {
          pt: "Programar é 90% pensamento e 10% código. (Não sei quem fez esse cálculo, mas vamos aceitar por agora 😂)...",
          en: "Programming is 90% thinking and 10% code. (I don't know who did this calculation, but let's accept it for now 😂)..."
        },
        date: "2025-08-03",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEeh3Lfk5ovNw/feedshare-shrink_1280/B4DZhuxgaiHYAk-/0/1754205144311?e=1779321600&v=beta&t=fOoMx4a--geHSRH2drFBQjbxJnOIy-2u9iXUD1wZ4ig",
        link: "https://www.linkedin.com/posts/terencio-correia-gaspar-15b44a238_o-que-fazes-quando-tens-um-bug-programar-activity-7357670358734254080-MGgj"
      },
      {
        id: 2,
        title: {
          pt: "Coisas que aprendi sendo desenvolvedor",
          en: "Things I learned as a developer"
        },
        excerpt: {
          pt: "Todo problema tem solução — às vezes, tudo o que precisamos é mudar a perspectiva ou quebrar o problema em partes menores...",
          en: "Every problem has a solution — sometimes all we need is to change our perspective or break the problem into smaller parts..."
        },
        date: "2025-08-01",
        image: "https://media.licdn.com/dms/image/v2/D4E22AQFJ9uORRoiitQ/feedshare-shrink_1280/B4EZhl.Dh6HIAk-/0/1754057424457?e=1779321600&v=beta&t=DY9ycWCgogG9w-BFfRw7Hkd7XzA0jVu03Wn-yd7UFhM",
        link: "https://www.linkedin.com/posts/terencio-correia-gaspar-15b44a238_coisas-que-aprendi-sendo-desenvolvedor-activity-7357050158062157825-l-Zs"
      },
      {
        id: 3,
        title: {
          pt: "Média Salarial para Desenvolvedores: O Que Você Realmente Precisa Saber",
          en: "Average Salary for Developers: What You Really Need to Know"
        },
        excerpt: {
          pt: "Ao ler o título deste artigo, você pode ter pensado que a discussão seria sobre quanto um desenvolvedor ganha ou deve ganhar. No entanto...",
          en: "When you read the title of this article, you might have thought the discussion would be about how much a developer earns or should earn. However..."
        },
        date: "2024-09-21",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQFtTK7hZNLjmg/feedshare-image-high-res/feedshare-image-high-res/0/1726920651377?e=1779321600&v=beta&t=sZTjruUatP0CZZJ5-h62eCZoWfyqELFHGT68fZQeB6I",
        link: "https://www.linkedin.com/posts/terencio-correia-gaspar-15b44a238_%F0%9D%90%8C%C3%A9%F0%9D%90%9D%F0%9D%90%A2%F0%9D%90%9A-%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%A9%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%9A-%F0%9D%90%83%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AF%F0%9D%90%A8%F0%9D%90%A5%F0%9D%90%AF%F0%9D%90%9E%F0%9D%90%9D%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%AC-activity-7243230199545245696--P4r"
      },
      {
        id: 4,
        title: {
          pt: "5 Motivos para Aprender Flutter",
          en: "5 Reasons to Learn Flutter"
        },
        excerpt: {
          pt: "Olá, dev! Tudo bom? Se você está começando a programar ou pensando em...",
          en: "Hi, dev! How are you? If you are starting to program or thinking about..."
        },
        date: "2024-08-29",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEOpzaEMueqBA/feedshare-image-high-res/feedshare-image-high-res/0/1724924806619?e=1779321600&v=beta&t=tJyN2VjbJMewLgc0wZmhOHY4AqO8R1YZ9RlLCQCeQa8",
        link: "https://www.linkedin.com/posts/terencio-correia-gaspar-15b44a238_flutter-programming-activity-7234859026885337088-SDGt"
      },
      {
        id: 5,
        title: {
          pt: "Como Ser Um Bom Programador?",
          en: "How to Be a Good Programmer?"
        },
        excerpt: {
          pt: "Nas últimas semanas tenho recebido com frequência perguntas do género, porém tenho respondido a todos de maneira individual...",
          en: "In recent weeks, I have frequently received similar questions, but I have answered all of them individually..."
        },
        date: "2024-07-12",
        image: "https://media.licdn.com/dms/image/v2/D4D22AQH29Xnl2afZgQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1720773196817?e=1779321600&v=beta&t=8-Nnu_VqFf0S9LFuZn8NvTzoW454W3PkEpDGC8H0-zk",
        link: "https://www.linkedin.com/posts/terencio-correia-gaspar-15b44a238_%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%A6%F0%9D%90%A8-%F0%9D%90%92%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%94%F0%9D%90%A6-%F0%9D%90%81%F0%9D%90%A8%F0%9D%90%A6-%F0%9D%90%8F%F0%9D%90%AB%F0%9D%90%A8%F0%9D%90%A0%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%9D%F0%9D%90%A8%F0%9D%90%AB-activity-7217445909645692931-vXVc"
      }
    ]

  }
}
