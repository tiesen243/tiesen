import type { Post } from '../types/Post'

import { useQuery } from '@apollo/client'

import GET_REPOSITORY from '../graphql/Query'

const GetPosts: any = () => {
  const { data } = useQuery(GET_REPOSITORY, {
    variables: {
      username: 'tiesen243',
      repository: 'tiesen',
      categoryId: process.env.REACT_APP_DISSCUSTION_CATEGORY_ID,
    },
  })
  const discussions = data?.repository?.discussions?.nodes
  const posts = discussions?.map((discussion: any): Post => {
    const {
      number: id,
      id: disscussionId,
      title,
      createdAt,
      bodyHTML: html,
      bodyText,
      url: discussionUrl,
      author,
    } = discussion

    const url = `/post/${disscussionId}`
    const authorName = author.login
    const authorAvatar = author.avatarUrl
    const createdAtDate = new Date(createdAt)
    const createdAtDateFormat = createdAtDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    const post: Post = {
      id,
      disscussionId,
      url,
      discussionUrl,
      title,
      html,
      bodyText,
      createdAt: createdAtDateFormat,
      author: { name: authorName, avatar: authorAvatar },
    }
    return post
  })

  return posts
}

export default GetPosts
