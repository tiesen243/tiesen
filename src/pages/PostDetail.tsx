import React from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from 'html-react-parser'

import type { Post } from '../types/Post'
import GetPost from '../graphql/getPosts'

import FacebookComment from '../components/FacebookComment'

const PostDetail: React.FC = () => {
  const { id } = useParams()
  const post: Post[] = GetPost()
  const [detail, setDetail] = React.useState<Post>()

  React.useEffect(() => {
    post?.forEach((post) => {
      if (post.disscussionId === id) setDetail(post)
    })
    // eslint-disable-next-line
  }, [!post])

  const { createdAt, title, html, author, discussionUrl, disscussionId } =
    detail || {}

  return (
    <div className="island w-[90%] lg:w-3/5 h-fit mx-auto my-10">
      <div className="flex flex-row pt-4 pl-4">
        <img
          src={author?.avatar}
          alt="Author avatar"
          className="w-16 h-16 rounded-full shadow-lg shadow-black"
        ></img>
        <div className="flex flex-col pl-4 select-none justify-center gap-2">
          <h3 className="capitalize text-2xl font-bold">{author?.name}</h3>
          <p>{createdAt}</p>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center mt-8">{title}</h1>
      <div className="island w-full mx-auto mt-8 mb-8 bg-[#242526] break-words overflow-auto">
        {parse(html || '')}
      </div>
      <FacebookComment path={disscussionId as string} />
      <div className="flex justify-around mb-4">
        <a
          href={discussionUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-68"
        >
          see source post
        </a>
        <Link to="/" className="btn-68">
          back to home
        </Link>
      </div>
    </div>
  )
}

export default PostDetail
