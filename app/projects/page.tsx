'use client'
import React, { useState } from 'react'
import SideBar from './SideBar';
import ProjectContent from './ProjectContent';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='f_col lg:f_row w-screen relative lg:static'>
      <div className={`absolute lg:static w-full md:w-5/12 lg:w-3/12 mt-5  ${isOpen ? "block " : "  hidden "} z-40 lg:block  `}>
        <SideBar handleOpen={handleOpen} />
      </div>
      <div className="w-full lg:w-9/12 bg-white dark:bg-black absolute lg:static">
        <ProjectContent handleOpen={handleOpen} />
      </div>
    </div>
  )
}

export default Projects;