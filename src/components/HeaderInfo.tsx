import React from 'react'

import me from '../data/personal'

const HeaderInfo: React.FC = () => {
  return (
    <>
      <img
        src={me.avatar}
        alt="avt"
        className="w-24 h-24 rounded-full shadow-lg shadow-black relative -top-16 left-10 border border-black"
      ></img>
      <h2 className="text-3xl font-bold relative -top-24 left-36 w-fit">
        <i className="fa-solid fa-snowflake fa-spin"></i> {me.name}{' '}
        <i className="fa-solid fa-snowflake fa-spin fa-spin-reverse"></i>
      </h2>
      <p className="island-text text-center -top-14 relative">
        Trần trụi với thiên nhiên,<br></br>
        Hồn nhiên như cây cỏ
      </p>
    </>
  )
}

export default HeaderInfo
