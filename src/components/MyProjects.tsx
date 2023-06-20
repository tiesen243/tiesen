import React from 'react'

import type { Project } from '../types/project'
import projects from '../data/project'

const MyProjects: React.FC = () => {
  return (
    <ul className="mb-4 flex flex-col items-center lg:flex-row flex-wrap justify-between mx-2">
      {projects?.map((project: Project, idx: number) => (
        <li
          key={idx}
          className="island my-4 px-4 py-4 text-xl w-full lg:w-[49%] h-fit lg:h-64"
        >
          <h3 className="text-center font-medium text-2xl mb-4">
            Name: <b>{project.name}</b>
          </h3>
          <p>Description: {project.description}</p>
          {project.language && <p>Languages: {project.language.join(', ')} </p>}
          {project.framework && (
            <p>Framework: {project.framework.join(', ')} </p>
          )}
          {project.features && <p>Features: {project.features.join(', ')}</p>}
          <p>
            Repo:{' '}
            <a target="_blank" rel="noreferrer" href={project.repoUrl}>
              {project.repoUrl}
            </a>
          </p>
          {project.deployedUrl && (
            <p>
              Deploy:{' '}
              <a target="_blank" rel="noreferrer" href={project.deployedUrl}>
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
