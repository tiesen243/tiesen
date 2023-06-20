import React from 'react'

declare const window: any

const FacebookComment: React.FC = () => {
  React.useEffect(() => {
    window.FB.XFBML.parse()
  }, [])

  return (
    <>
      <h3 className="island-text">Comment</h3>
      <div className="bg-gray-50 rounded-lg shadow-md shadow-white mx-auto my-3 w-[96%]">
        <div
          className="fb-comments"
          data-href="https://tiesen.vercel.app/contact"
          data-width="100%"
          data-mobile="auto_detect"
          data-numposts="5"
        ></div>
      </div>
    </>
  )
}

export default FacebookComment
