import React from 'react'

import me from '../data/personal'

const Header = () => {
  return (
    <header className="bg-[#2d333b] shadow-xl shadow-[#2d333b] sticky top-0 h-full z-20">
      <nav className="flex justify-between px-3 py-2">
        <div className="flex gap-5">
          <img
            src={me.avatar}
            alt="logo"
            className="w-14 h-14 rounded-full"
          ></img>
          <h1 className="font-semibold text-5xl my-auto">{me.nickname}</h1>
        </div>
        <ul className="font-medium text-2xl flex gap-3 right-6 my-auto">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
