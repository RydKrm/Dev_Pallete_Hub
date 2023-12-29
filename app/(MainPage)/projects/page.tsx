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
    <div className='f_col lg:f_row w-screen relative lg:static bg-white dark:bg-c_bg_dark'>
      <div className={`absolute lg:static w-full md:w-5/12 lg:w-3/12 mt-5  ${isOpen ? "block " : "  hidden "} z-40 lg:block bg-white dark:bg-c_bg_dark `}>
        <SideBar handleOpen={handleOpen} />
      </div>
      <div className="w-full lg:w-9/12  absolute lg:static bg-white dark:bg-c_bg_dark">
        <ProjectContent handleOpen={handleOpen} />
      </div>
    </div>
  )
}

export default Projects;