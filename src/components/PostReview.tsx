import React from 'react'
import { Link } from 'react-router-dom'

import GetPosts from '../graphql/getPosts'
import type { Post } from '../types/Post'

const PostReview: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([])
  const RecievePosts: Post[] = GetPosts()

  React.useEffect(() => {
    setPosts(RecievePosts)
    // eslint-disable-next-line
  }, [!RecievePosts])

  return (
    <>
      <h2 className="island-text mb-4 select-none">My post</h2>
      <div className="flex flex-col gap-5">
        {posts?.map((post: Post) => {
          const { id, url, title, bodyText, createdAt, author } = post

          let previewText: string = bodyText
          if (bodyText.length >= 69)
            previewText = bodyText.substring(0, 69) + '...'

          return (
            <div key={id} className="island w-full">
              <div className="flex flex-row pt-4 pl-4">
                <img
                  src={author.avatar}
                  alt="Author avatar"
                  className="w-14 h-14 rounded-full shadow-lg shadow-black"
                ></img>
                <div className="flex flex-col pl-4 select-none justify-center">
                  <h3 className="capitalize text-2xl font-bold">
                    {author.name}
                  </h3>
                  <p>{createdAt}</p>
                </div>
              </div>
              <h2 className="island-text mt-4 mb-4">{title}</h2>
              <div className="island bg-[#242526] w-[97%] mx-auto">
                {previewText}
              </div>
              <div className="flex justify-around">
                <Link to={url} className="btn-68">
                  See full post
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PostReview
