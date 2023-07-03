import React from 'react'

import me from '../data/personal'

const HeaderInfo: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mb-4">
      <h2 className="text-3xl font-bold select-none">
        <i className="fa-solid fa-snowflake fa-spin"></i> {me.name}{' '}
        <i className="fa-solid fa-snowflake fa-spin fa-spin-reverse"></i>
      </h2>
      <p className="island-text select-none">
        Trần trụi với thiên nhiên<br></br>
        Hồn nhiên như cây cỏ
      </p>
    </section>
  )
}

export default HeaderInfo
