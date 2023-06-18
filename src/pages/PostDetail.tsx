import React from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from 'html-react-parser'
import GetPost from '../graphql/getPosts'

const PostDetail: React.FC = () => {
  React.useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault()
    }
  })

  let post = GetPost(),
    { id } = useParams(),
    detail
  if (id) detail = post[+id]

  const { discussionUrl, title, html, createdAt, author } = detail

  return (
    <div className="container m-auto island mt-10 w-[90%] lg:w-3/5 h-fit mb-16">
      <div className="flex flex-row pt-4 pl-4">
        <img
          src={author.avatar}
          alt="Author avatar"
          className="w-16 rounded-full shadow-lg shadow-black"
        ></img>
        <div className="flex flex-col pl-4">
          <h3 className="capitalize text-2xl font-bold">{author.name}</h3>
          <p>{createdAt}</p>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center pt-2 abcd">{title}</h1>
      <div className="island w-11/12 mx-auto mt-4 mb-4 bg-[#242526] break-words text-ellipsis overflow-x-auto whitespace-nowrap">
        {parse(html)}
      </div>
      <div className="flex justify-around mb-4 -mt-4">
        <a
          href={discussionUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-68 w-fit"
        >
          see source post
        </a>
        <Link to="/" className="btn btn-68 w-fit ml-4">
          back to home
        </Link>
      </div>
    </div>
  )
}

export default PostDetail
