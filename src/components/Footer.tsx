import React from 'react'
import contact from '../data/contact'

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#2d333b] fixed bottom-0 left-0 z-20 shadow shadow-black">
      <div className="px-3 py-2">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="island-text text-xl"
        >
          <i className="fa-regular fa-copyright"></i> tiesen243
        </a>
      </div>
    </footer>
  )
}

export default Footer
