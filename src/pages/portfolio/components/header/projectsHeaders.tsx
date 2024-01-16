import React from 'react'

import './projectsHeader.css';

import { MAIN_URL } from '../../consts/projectURLS';

function ProjectsHeader() {
  return (
    <div className='project-header'>
        <div className='project-header-image-container'></div>
        <div className='project-header-title'>
            My Projects
        </div>
        <a href={MAIN_URL} className="project-header-button ref">
          My GitHub
        </a>
    </div>
  )
}

export default ProjectsHeader