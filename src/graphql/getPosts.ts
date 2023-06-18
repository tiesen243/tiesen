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
  const posts = discussions?.map((discussion: any, idx: number): Post => {
    const {
      title,
      createdAt,
      bodyHTML: html,
      bodyText,
      url: discussionUrl,
      author,
    } = discussion

    const url = `/post/${idx}`
    const authorName = author.login
    const authorAvatar = author.avatarUrl
    const post = {
      idx,
      url,
      discussionUrl,
      title,
      html,
      bodyText,
      createdAt,
      author: { name: authorName, avatar: authorAvatar },
    }
    return post
  })

  return posts
}

export default GetPosts
