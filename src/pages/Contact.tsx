import React from 'react'

import contact from '../data/contact'
import me from '../data/personal'

function Contact() {
  return (
    <div className="container mr-auto ml-auto">
      <img src={me.banner} alt="banner" className="mb-4 rounded-lg"></img>
      <hr className="mb-2 border-none h-[1px] bg-gray-300"></hr>
      <div className="container flex flex-row col-2 py-2 gap-5 mr-auto ml-auto">
        <div className="island">
          <h3 className="island-text pb-4">Contact</h3>
          <ul>
            <li>
              <i className="fa-solid fa-envelope pr-2"></i>
              Email: {contact.email}
            </li>
            <li>
              <i className="fa-solid fa-phone pr-2"></i> Phone: {contact.phone}
            </li>
            <li>
              <i className="fa-brands fa-linkedin pr-2"></i>
              LinkedIn: <a href={contact.linkedin}>Trần Tiến</a>
            </li>
            <li>
              <i className="fa-brands fa-github pr-2"></i>
              Github:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={contact.github}
              >
                Trần Tiến
              </a>
            </li>
            <li>
              <i className="fa-brands fa-facebook pr-2"></i>
              Facebook:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={contact.facebook}
              >
                Trần Tiến
              </a>
            </li>
            <li>
              <i className="fa-brands fa-twitter pr-2"></i>
              Twitter:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={contact.twitter}
              >
                Trần Tiến
              </a>
            </li>
            <li>
              <i className="fa-brands fa-youtube pr-2"></i>Youtube:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={contact.youtube}
              >
                Tiesen
              </a>
            </li>
          </ul>
        </div>
        <div className="island">
          <h3 className="island-text">Social</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
