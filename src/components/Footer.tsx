import React from 'react'
import contact from '../data/contact'

const Footer: React.FC = () => {
  const date = new Date()
  return (
    <footer className="w-full h-fit bg-[#2d333b] fixed bottom-0 left-0 z-20 shadow shadow-black">
      <div className="px-4 py-2 flex flex-row justify-between">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="island-text text-xl"
        >
          <i className="fa-regular fa-copyright"></i> tiesen243
        </a>
        <p className="island-text text-xl">
          {date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
    </footer>
  )
}

export default Footer
