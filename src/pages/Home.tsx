import React from 'react'

import me from '../data/personal'

const Home = () => {
  return (
    <div className="container mr-auto ml-auto mb-10">
      <div>
        <img src={me.banner} alt="banner" className="rounded-b-lg"></img>
        <img
          src={me.avatar}
          alt="avt"
          className="w-24 h-24 rounded-full shadow-black relative -top-10 left-5 border border-black"
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
        <div className="island w-full lg:w-2/5 sm:text-2xl lg:text-xl font-medium pl-4 pb-4">
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
            <div className="island w-full bg-[#3e4754]">
              <h1 className="font-bold text-2xl text-center">dsadsad</h1>
              <p>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
