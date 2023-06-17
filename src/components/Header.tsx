import React from 'react'

import me from '../data/personal'

const Header = () => {
  return (
    <header className="bg-[#2d333b] shadow-xl shadow-[#2d333b] sticky top-0 h-full z-20">
      <nav className="flex justify-between px-3 py-2">
        <a className="flex gap-5 hover:text-white" href="/">
          <img
            src={require('../assets/Jp_1.png')}
            alt="logo"
            className="w-14"
          ></img>
          <h1 className="font-semibold text-5xl my-auto">{me.nickname}</h1>
        </a>
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
