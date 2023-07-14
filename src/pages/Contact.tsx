import React from 'react'

import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'
import FacebookComment from '../components/FacebookComment'

const Contact: React.FC = () => {
  return (
    <>
      <Banner />
      <hr className="hr-style"></hr>
      <div className="flex flex-col lg:flex-row py-2 gap-5 lg:justify-between mx-2 mt-2">
        <div className="island w-full h-fit p-4 lg:w-[49%] text-2xl lg:text-xl">
          <ContactInfo />
        </div>
        <div className="island w-full lg:w-[49%] mt-4 lg:mt-0">
          <FacebookComment path="contact" />
        </div>
      </div>
    </>
  )
}

export default Contact
