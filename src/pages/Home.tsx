import React from 'react'

import Banner from '../components/Banner'
import HeaderInfo from '../components/HeaderInfo'
import MyInfo from '../components/MyInfo'
import PostReview from '../components/PostReview'

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <HeaderInfo />

      <div className="flex flex-col lg:flex-row gap-3 mx-2">
        <div className="island w-full h-fit lg:w-2/5 sm:text-2xl lg:text-xl font-medium pl-4 pb-4 select-none">
          <MyInfo />
        </div>
        <div className="island w-full lg:w-3/5 mb-6  mt-4 lg:mt-0">
          <PostReview />
        </div>
      </div>
    </>
  )
}

export default Home
