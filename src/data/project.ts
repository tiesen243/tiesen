import type { Project } from '../types/project'

const projects: Project[] = [
  {
    name: 'Tiesen',
    description: 'My personal website',
    framework: ['ReactJs', 'Tailwind CSS'],
    language: ['TypeScript'],
    features: ['Github Graphql', 'Responsive'],
    repoUrl: 'https://github.com/tiesen243/tiesen',
    deployedUrl: 'https://tiesen.vercel.app/',
  },
  {
    name: 'Nvim Config',
    description: 'My neovim config',
    language: ['Lua'],
    features: ['LSP', 'Treesitter', 'Telescope', 'NvimTree', 'GitSigns'],
    repoUrl: 'https://github.com/tiesen243/nvim',
  },
  {
    name: 'YKNAnime',
    description: 'Anime website with consumet API',
    framework: ['Next.js', 'Tailwind CSS'],
    language: ['TypeScript'],
    features: [
      'Responsive',
      'Dark Mode',
      'Search',
      'Save Anime',
      'Loading Skeleton',
    ],
    repoUrl: 'https://github.com/tiesen243/yknanime',
    deployedUrl: 'https://yknanime.vercel.app/',
  },
  {
    name: 'YKNManga',
    description: 'Manga website with mangadex API',
    framework: ['Next.js', 'Tailwind CSS'],
    language: ['TypeScript'],
    features: ['Responsive', 'Dark Mode', 'Search', 'Save Manga'],
    repoUrl: 'https://github.com/tiesen243/yknmanga',
    deployedUrl: 'https://yknmanga.vercel.app/',
  },
  {
    name: 'DuckGPT',
    description: 'Quack quack quack',
    language: ['JavaScript'],
    repoUrl: 'https://github.com/tiesen243/duckGPT',
    deployedUrl: 'https://tiesen243.github.io/duckGPT/',
  },
  {
    name: 'ChatBot',
    description: 'A chatbot that can talk to you',
    language: ['JavaScript'],
    features: ['Chatbot', 'openaiAPI'],
    repoUrl: 'https://github.com/tiesen243/ChatBot',
    deployedUrl: 'https://tiesen243.github.io/ChatBot/',
  },
  {
    name: 'TodoList',
    description: 'A todo app',
    language: ['JavaScript', 'CSS'],
    features: ['Todo', 'Localstorage'],
    repoUrl: 'https://github.com/tiesen243/TodoList',
    deployedUrl: 'https://tiesen243.github.io/TodoList/',
  },
]

export default projects
