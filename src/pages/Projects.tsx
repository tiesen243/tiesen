import React from 'react'

import Banner from '../components/Banner'
import MyProjects from '../components/MyProjects'

const Projects: React.FC = () => {
  return (
    <>
      <Banner />
      <hr className="hr-style"></hr>
      <MyProjects />
    </>
  )
}

export default Projects
