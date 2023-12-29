'use client'
import React, { useState } from 'react'
import SideBar from './SideBar';
import ProjectContent from './ProjectContent';
import LeftSideBar from './LeftSIdeBar/LeftSideBar';

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='container relative w-screen bg-white f_col lg:f_row lg:static dark:bg-c_bg_dark'>
      <div className="absolute hidden w-full bg-white lg:block lg:w-3/12 lg:static dark:bg-c_bg_dark">
        <LeftSideBar/>
      </div>
      <div className="absolute w-full bg-white lg:w-5/12 lg:static dark:bg-c_bg_dark">
        <ProjectContent handleOpen={handleOpen} />
      </div>
      <div className={`absolute lg:static w-full md:w-5/12 lg:w-4/12 mt-5  ${isOpen ? "block " : "  hidden "} z-40 lg:block bg-white dark:bg-c_bg_dark `}>
        <SideBar handleOpen={handleOpen} />
      </div>
      
    </div>
  )
}

export default Questions;