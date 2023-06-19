import React from 'react'

import Banner from '../components/Banner'
import MyProjects from '../components/MyProjects'

const Projects: React.FC = () => {
  return (
    <div className="container mr-auto ml-auto mb-10">
      <Banner />
      <hr className="hr-style"></hr>
      <MyProjects />
    </div>
  )
}

export default Projects
