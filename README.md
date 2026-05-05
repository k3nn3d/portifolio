# Portfolio React - Terêncio Gaspar

Portfolio minimalista e moderno desenvolvido em React com animações suaves usando Framer Motion.

## ✨ Características

- ✅ Design minimalista preto e branco
- ✅ Animações suaves com Framer Motion
- ✅ Menu hamburguer responsivo
- ✅ Sistema de tradução PT/EN
- ✅ 100% responsivo
- ✅ Performance otimizada
- ✅ Clean Code

## 🚀 Tecnologias

- **React 18** - Framework principal
- **Framer Motion** - Animações fluidas
- **Vite** - Build tool ultra rápido
- **Lucide React** - Ícones modernos
- **CSS Modules** - Estilização modular

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Paleta de Cores

```css
--black: #000000
--white: #ffffff
--gray-900: #171717
--gray-800: #262626
--gray-700: #404040
--gray-600: #525252
--gray-500: #737373
--gray-400: #a3a3a3
```

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.jsx        # Menu responsivo com hamburguer
│   ├── Hero.jsx          # Seção principal
│   ├── About.jsx         # Sobre mim
│   ├── Skills.jsx        # Habilidades técnicas
│   ├── Projects.jsx      # Portfólio de projetos
│   ├── Contact.jsx       # Formulário de contato
│   └── Footer.jsx        # Rodapé
├── App.jsx               # Componente principal
├── main.jsx              # Entry point
└── index.css             # Estilos globais
```

## 🎯 Seções

1. **Hero** - Apresentação com animação de entrada
2. **About** - Sobre mim e experiência
3. **Skills** - Habilidades organizadas por categoria
4. **Projects** - Portfólio com filtros (Web, Mobile, Backend)
5. **Contact** - Formulário de contato com informações

## 🔧 Personalização

### Mudar Informações Pessoais

Edite os arquivos dos componentes e atualize:
- Nome e bio no `Hero.jsx`
- Texto sobre no `About.jsx`
- Links de redes sociais em `Header.jsx`, `Hero.jsx` e `Footer.jsx`
- Informações de contato em `Contact.jsx`

### Adicionar Projetos

Edite o array `projects` em `src/components/Projects.jsx`:

```javascript
{
  id: 7,
  title: "Seu Projeto",
  description: {
    pt: "Descrição em português",
    en: "Description in English"
  },
  tags: ['Tech1', 'Tech2', 'Tech3'],
  category: 'web', // 'web', 'mobile' ou 'backend'
  link: '#',
  github: '#'
}
```

### Adicionar Habilidades

Edite o objeto `skills` em `src/components/Skills.jsx`:

```javascript
const skills = {
  mobile: ['Flutter', 'React Native', ...],
  backend: ['Laravel', 'Node.js', ...],
  frontend: ['React', 'Vue.js', ...],
  tools: ['Git', 'Docker', ...]
};
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Arraste a pasta 'dist' para netlify.com
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json
"homepage": "https://seu-usuario.github.io/portfolio"

# Deploy
npm run build
npx gh-pages -d dist
```

## 📱 Responsividade

- **Desktop:** 1400px+
- **Laptop:** 1024px - 1400px
- **Tablet:** 768px - 1024px
- **Mobile:** 320px - 768px

## ⚡ Performance

- Lazy loading de componentes
- Otimização de animações
- Code splitting automático (Vite)
- Imagens otimizadas

## 🎭 Animações

Todas as animações usam Framer Motion:
- Fade in ao scroll
- Hover effects sutis
- Menu mobile com slide
- Transições suaves entre seções

## 📝 Licença

MIT - Use livremente!

## 👤 Autor

**Terêncio Gaspar** (@k3nn3dy)

- GitHub: [@k3nn3dy](https://github.com/k3nn3dy)
- LinkedIn: [terencio-gaspar](https://linkedin.com/in/terencio-gaspar)

---

**Desenvolvido com React e ❤️**
