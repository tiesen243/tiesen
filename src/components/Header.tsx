import React from 'react'
import { NavLink } from 'react-router-dom'

import me from '../data/personal'

const Header: React.FC = () => {
  return (
    <header className="bg-[#2d333b] shadow-xl shadow-[#2d333b] sticky top-0 h-full z-20">
      <nav className="flex justify-between px-3 py-2">
        <NavLink className="flex gap-5 hover:text-white" to="/">
          <img
            src={require('../assets/Jp_1.png')}
            alt="logo"
            className="w-14"
          ></img>
          <h1 className="font-semibold text-5xl my-auto">{me.nickname}</h1>
        </NavLink>
        <ul className="font-medium text-2xl flex gap-3 right-6 my-auto">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
