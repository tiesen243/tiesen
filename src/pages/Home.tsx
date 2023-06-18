import React from 'react'

import Posts from '../components/PostReview'

import me from '../data/personal'

const Home: React.FC = () => {
  return (
    <div className="container mr-auto ml-auto mb-10">
      <div>
        <img
          src={me.banner}
          alt="banner"
          className="rounded-b-lg shadow-lg shadow-[#dbdbdb] w-[97%] mx-auto"
        ></img>
        <img
          src={me.avatar}
          alt="avt"
          className="w-24 h-24 rounded-full shadow-lg shadow-black relative -top-10 left-5 border border-black"
        ></img>
        <h2 className="text-3xl font-bold relative -top-20 left-32 w-fit">
          <i className="fa-solid fa-snowflake fa-spin"></i> {me.name}{' '}
          <i className="fa-solid fa-snowflake fa-spin fa-spin-reverse"></i>
        </h2>

        <p className="island-text text-center -top-14 relative">
          Trần trụi với thiên nhiên,<br></br>
          Hồn nhiên như cây cỏ
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mx-2 -mt-6">
        <div className="island w-full h-fit lg:w-2/5 sm:text-2xl lg:text-xl font-medium pl-4 pb-4">
          <h2 className="island-text pb-4">About me</h2>
          <p>Date of birth: {me.DoB}</p>
          <p>Place: {me.Place}</p>
          <p>College: {me.college}</p>
          <p>Favourite: {me.favourite.join(', ')}</p>
          <p>Languages: {me.languages.join(', ')}</p>
          <p>Skills: {me.skills.join(', ')}</p>
        </div>
        <div className="island w-full lg:w-3/5 mb-6">
          <h2 className="island-text mb-4">My post</h2>
          <div className="flex flex-col gap-5">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
