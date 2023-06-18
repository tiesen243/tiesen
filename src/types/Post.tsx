export interface Post {
  idx: number
  title: string
  html: string
  bodyText: string
  createdAt: string
  url: string
  discussionUrl: string
  author: {
    name: string
    avatar: string
  }
}
