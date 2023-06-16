import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2d333b] sticky top-0">
      <nav className="flex gap-3 px-2 py-2">
        <div className="flex gap-3">
          <img
            src={require("../assets/images/1640249997536.jpg")}
            alt="logo"
            className="w-14 h-14 rounded-full"
          ></img>
          <h1 className="font-semibold text-5xl">Tiesen</h1>
        </div>
        <ul className="flex gap-3 font-medium text-2xl pt-2 absolute right-5">
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
  );
};

export default Header;
