import React from 'react'
import { Link } from 'react-router-dom'

import GetPosts from '../graphql/getPosts'
import type { Post } from '../types/Post'

const Posts: React.FC = () => {
  const posts = GetPosts()
  return (
    <>
      {posts?.map((post: Post) => {
        const { idx, url, discussionUrl, title, bodyText, createdAt, author } =
          post
        let previewText: string = bodyText
        if (bodyText.length >= 100)
          previewText = bodyText.substring(0, 90) + '...'
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
        const createdDate: Date = new Date(createdAt)
        const createdDateFormat = createdDate.toLocaleDateString(
          'en-US',
          options
        )

        return (
          <div key={idx} className="island w-full">
            <div className="flex flex-row pt-4 pl-4">
              <img
                src={author.avatar}
                alt="Author avatar"
                className="w-16 rounded-full shadow-lg shadow-black"
              ></img>
              <div className="flex flex-col pl-4">
                <h3 className="capitalize text-2xl font-bold">{author.name}</h3>
                <p>{createdDateFormat}</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
            <div className="island bg-[#242526] w-11/12 mx-auto text-ellipsis overflow-x-auto whitespace-nowrap">
              {previewText}
            </div>
            <div className="flex justify-around">
              <Link
                to={{
                  pathname: url,
                }}
                state={{ post }}
                relative="path"
                className="btn btn-68 text-center"
              >
                See full post
              </Link>
              <a
                href={discussionUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-68 text-center"
              >
                See source post
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Posts
