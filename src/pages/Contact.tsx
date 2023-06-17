import React from 'react'

import contact from '../data/contact'

function Contact() {
  return (
    <div className="container flex flex-row col-2 py-2 gap-5 mr-auto ml-auto">
      <div className="island">
        <h3 className="island-text">Contact</h3>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            Email: {contact.email}
          </li>
          <li>
            <i className="fa-solid fa-phone"></i> Phone: {contact.phone}
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn:
            <a href={contact.linkedin}>Tran Tien</a>
          </li>
          <li>
            Facebook:
            <a target="_blank" href={contact.facebook}>
              Tran Tien
            </a>
          </li>
          <li>
            Twitter:
            <a target="_blank" href={contact.twitter}>
              Tran Tien
            </a>
          </li>
        </ul>
      </div>
      <div className="island">
        <h3 className="island-text">Social</h3>
      </div>
    </div>
  )
}

export default Contact
