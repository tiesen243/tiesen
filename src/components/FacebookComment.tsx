import React from 'react'

declare const window: any

type Props = {
  path: string
}

const FacebookComment: React.FC<Props> = (props: any) => {
  React.useEffect(() => {
    window.FB.XFBML.parse()
  }, [])

  return (
    <>
      <h3 className="island-text select-none">Comment</h3>
      <div className="bg-gray-50 rounded-lg shadow-md shadow-white mx-auto my-3 w-[96%]">
        <div
          className="fb-comments"
          data-href={'https://tiesen.vercel.app/' + props.path}
          data-width="100%"
          data-mobile="auto_detect"
          data-numposts="5"
        ></div>
      </div>
    </>
  )
}

export default FacebookComment
