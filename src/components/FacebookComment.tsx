import React from 'react'

const FacebookComment: React.FC = () => {
  return (
    <>
      <h3 className="island-text">Comment</h3>
      <div className="flex justify-center bg-gray-50 rounded-lg shadow mx-auto p-4 mt-4 w-full">
        <div
          className="fb-comments"
          data-href="https://tiesen.vercel.app/contact"
          data-width="600"
          data-mobile="auto_detect"
          data-colorscheme="dark"
          data-numposts="5"
        ></div>
      </div>
    </>
  )
}

export default FacebookComment
