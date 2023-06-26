export interface Post {
  id: number
  disscussionId: string
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
