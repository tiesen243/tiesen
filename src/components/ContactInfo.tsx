import React from 'react'

import contact from '../data/contact'

const ContactInfo: React.FC = () => {
  return (
    <>
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
          LinkedIn:{' '}
          <a target="_blank" rel="noreferrer" href={contact.linkedin}>
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-github pr-2"></i>
          Github:{' '}
          <a target="_blank" rel="noreferrer" href={contact.github}>
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-facebook pr-2"></i>
          Facebook:{' '}
          <a target="_blank" rel="noreferrer" href={contact.facebook}>
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-twitter pr-2"></i>
          Twitter:{' '}
          <a target="_blank" rel="noreferrer" href={contact.twitter}>
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-youtube pr-2"></i>Youtube:{' '}
          <a target="_blank" rel="noreferrer" href={contact.youtube}>
            Tiesen
          </a>
        </li>
      </ul>
    </>
  )
}

export default ContactInfo
