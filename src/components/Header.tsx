import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-[#2d333b] shadow-xl shadow-[#2d333b] sticky top-0 h-full z-20 select-none">
      <nav className="flex justify-between px-4 py-2">
        <div className="flex gap-5">
          <img
            src={require('../assets/logo.png')}
            alt="logo"
            className="w-14 h-14"
          ></img>
          <h1 className="font-semibold text-5xl my-auto">Tiesen</h1>
        </div>
        <ul className="font-medium text-2xl flex gap-3 right-6 my-auto text-gray-500">
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
