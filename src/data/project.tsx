import type { Project } from '../types/project'

const projects: Project[] = [
  {
    name: 'Tiesen',
    description: 'My personal website',
    framework: ['React', 'Tailwind CSS'],
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
