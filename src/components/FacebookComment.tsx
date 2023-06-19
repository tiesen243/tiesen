import React from 'react'

const FacebookComment: React.FC = () => {
  const refresh = () => window.location.reload()

  return (
    <>
      <h3 className="island-text">Comment</h3>
      <div className="flex flex-col justify-center bg-gray-50 rounded-lg shadow mx-auto p-4 mt-4 w-full">
        <div
          className="fb-comments"
          data-href="https://tiesen.vercel.app/contact"
          data-width="600"
          data-mobile="auto_detect"
          data-colorscheme="dark"
          data-numposts="5"
        ></div>
        <button
          onClick={refresh}
          className="capitalize bg-[#3578e5] text-center text-sm font-bold w-fit p-2 mx-auto rounded-lg hover:bg-[#ebedf0] transition-colors ease-in-out duration-500"
        >
          refresh
        </button>
      </div>
    </>
  )
}

export default FacebookComment
