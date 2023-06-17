import React from 'react'

import me from '../data/personal'

const Home = () => {
  return (
    <div className="container mr-auto ml-auto mb-2">
      <div>
        <img src={me.banner} alt="banner"></img>
        <img
          src={me.avatar}
          alt="avt"
          className="w-20 h-20 rounded-full shadow-black relative -top-10 left-5 border border-black"
        ></img>
        <h2 className="text-3xl font-bold relative -top-20 left-28 w-fit">
          {me.name}
        </h2>
      </div>

      <div className="flex gap-3">
        <div className="island w-2/5 sm:text-sm lg:text-xl font-medium">
          <h2 className="island-text">About me</h2>
          <p>Date of birth: {me.DoB}</p>
          <p>Place: {me.Place}</p>
          <p>College: {me.college}</p>
          <p>Favourite: {me.favourite.join(', ')}</p>
          <p>Languages: {me.languages.join(', ')}</p>
          <p>Skills: {me.skills.join(', ')}</p>
        </div>
        <div className="island w-3/5">
          <h2 className="island-text">My post</h2>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Home
