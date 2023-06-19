import React from 'react'

import projects from '../data/project'

const MyProjects: React.FC = () => {
  return (
    <ul className="mb-4 flex flex-col items-center lg:flex-row flex-wrap justify-between mx-2">
      {projects.map((project, idx) => (
        <li
          key={project.id}
          className="island my-4 px-4 py-4 text-xl w-full lg:w-[49%] h-fit lg:h-64"
        >
          <h3 className="text-center text-2xl mb-4">
            Name: <b>{project.name}</b>
          </h3>
          <p>Description: {project.description}</p>
          <p>Language: {project.language} </p>
          {project.framework && (
            <p>Framework: {project.framework.join(', ')} </p>
          )}
          {project.features && <p>Features: {project.features.join(', ')}</p>}
          <p>
            Repo:{' '}
            <a target="_blank" rel="noopener noreferrer" href={project.repoUrl}>
              {project.repoUrl}
            </a>
          </p>
          {project.deployedUrl && (
            <p>
              Deployed:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.deployedUrl}
              >
                {project.deployedUrl}
              </a>
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MyProjects
