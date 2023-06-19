export interface Project {
  id?: number
  name: string
  description: string
  framework?: string[]
  language: string[]
  features?: string[]
  repoUrl: string
  deployedUrl?: string
}
