import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen -mt-16 select-none">
      <h1 className="text-center text-9xl font-black">404</h1>
      <p className="text-3xl font-semibold">Page not found 😅</p>
      <p className="sm:text-base md:text-xl lg:text-2xl font-medium break-words">
        The page you are looking for does not exist or has been removed. 😭
      </p>
      <Link to="/" className="font-medium text-lg uppercase">
        Go back to home
      </Link>
    </div>
  )
}

export default NotFound
