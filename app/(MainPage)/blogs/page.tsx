'use client'
import React, { useState } from 'react'
import SideBar from './SideBar';
import ProjectContent from './ProjectContent';

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='container relative w-full bg-white f_col lg:f_row lg:static dark:bg-c_bg_dark -ms-8'>
      <div className="absolute w-full bg-white md:full lg:w-8/12 lg:static dark:bg-c_bg_dark">
        <ProjectContent handleOpen={handleOpen} />
      </div>
      <div className={`absolute lg:static w-full md:w-5/12 lg:w-4/12 mt-5  ${isOpen ? "block " : "  hidden "} z-40 lg:block bg-white dark:bg-c_bg_dark `}>
        <SideBar handleOpen={handleOpen} />
      </div>
      
    </div>
  )
}

export default Questions;