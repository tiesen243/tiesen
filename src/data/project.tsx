import type { Project } from '../types/project'

const projects: Project[] = [
  {
    name: 'Tiesen',
    description: 'My personal website',
    framework: ['React', 'Tailwind CSS'],
    language: 'Typescript',
    features: ['Github Graphql', 'Responsive'],
    repoUrl: 'https://github.com/tiesen243/tiesen',
    deployedUrl: 'https://tiesen.vercel.app/',
  },
  {
    name: 'nvim',
    description: 'My neovim config',
    language: 'Lua',
    features: ['LSP', 'Treesitter', 'Telescope', 'NvimTree', 'GitSigns'],
    repoUrl: 'https://github.com/tiesen243/nvim',
  },
  {
    name: 'DuckGPT',
    description: 'Quack quack quack',
    language: 'Javascript',
    repoUrl: 'https://github.com/tiesen243/duckGPT',
    deployedUrl: 'https://tiesen243.github.io/duckGPT/',
  },
  {
    name: 'ChatBot',
    description: 'A chatbot that can talk to you',
    language: 'Javascript',
    features: ['Chatbot', 'openaiAPI'],
    repoUrl: 'https://github.com/tiesen243/ChatBot',
    deployedUrl: 'https://tiesen243.github.io/ChatBot/',
  },
  {
    name: 'todo',
    description: 'A todo app',
    language: 'Javascript',
    features: ['Todo', 'Localstorage'],
    repoUrl: 'https://github.com/tiesen243/TodoList',
    deployedUrl: 'https://tiesen243.github.io/TodoList/',
  },
]

export default projects
