import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <>
      <h3 className="island-text pb-4 select-none">Contact</h3>
      <ul className=" flex flex-col gap-2">
        <li>
          <i className="fa-solid fa-envelope pr-2"></i>Email:
          ttien56906@gmail.com
        </li>
        <li>
          <i className="fa-solid fa-phone pr-2"></i>Phone: 090 525 88 44
        </li>
        <li>
          <i className="fa-brands fa-linkedin pr-2 text-3xl"></i>LinkedIn:{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/tiesen243/"
          >
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-github pr-2"></i>Github:{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/tiesen243"
          >
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-facebook pr-2"></i>Facebook:{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/tiesen243/"
          >
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-twitter pr-2"></i>Twitter:{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/tiesen243"
          >
            Trần Tiến
          </a>
        </li>
        <li>
          <i className="fa-brands fa-youtube pr-2"></i>Youtube:{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@tiesen243"
          >
            Tiesen
          </a>
        </li>
      </ul>
    </>
  )
}

export default ContactInfo
