import React from 'react'
import contact from '../data/contact'

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#2d333b] sticky bottom-0">
      <div className="px-3 py-2">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="island-text text-xl hover:text-red-300"
        >
          @tiesen243
        </a>
      </div>
    </footer>
  )
}

export default Footer
