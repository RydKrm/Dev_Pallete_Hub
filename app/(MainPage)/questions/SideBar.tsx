'use client'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { projectData } from '../../../lib/data/projectsData';
import { projectInterFace } from '@/interface/projectsInterface';
import Image from 'next/image';
import TagList from '@/components/shared/TagList';

interface SideBarProps {
  handleOpen: () => void
}

const projects: projectInterFace[] = projectData;

const colors = ["text-c_primary", "text-c_neutral", "text-c_secondary", "text-c_tertiary"];

const SideBar: React.FC<SideBarProps> = ({ handleOpen }) => {

  return (
    <>
      <div className='f_col lg:ms-10 lg:mt-14'>
        <p className='w-8 h-8 pt-1 pl-2 mb-5 text-white rounded-md lg:hidden bg-c_tertiary dark:bg-c_primary' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /> </p>
        {/* <div>
          <h2 className='mb-4 heading_2'>Select Tags</h2>
          <div className="grid grid-cols-3">
            {
            tags.map((tag, index) => <p className={`heading_3 text-sm dark:text-slate-300 font-thin my-1 hover:${colors[index % 4]} ms-3 `} key={tag._id}>{tag.tag}</p>)
          }
          </div>
        </div> */}
        <TagList/>
        <div>
          <h2 className='mt-10 mb-4 heading_2'>Recent Projects </h2>
          {
            projects.map(project => 
              <div key={project._id} className='flex flex-row pb-2 my-5 border-b border-gray-300 dark:border-gray-700'>
                <Image className="h-24 w-28" src={project.image} height={450} width={450} alt='React Post Image' />
                <div className='flex flex-col'>
                  <p className='w-48 my-1 text-sm font-thin heading_3 dark:text-slate-300 ms-3' >{project.name}</p>
                  <div className="grid grid-cols-3 mt-2 mb-2 gap-y-2 ms-3">
                    {project.tags.map((tag: { _id: number; tag: string }, index: number) => (<p className={` tag_text ${colors[index % 4]} `} key={tag._id}>{tag.tag}.</p>))}
                  </div>
                  {/* <div className="flex flex-row">
                    <Image src='/project/project_1.jpg' className='w-6 h-6 rounded-full ms-3 ' height={120} width={120} alt='sidebar image' />
                    <h2 className='mt-1 heading_3 ms-2'>John Deo </h2>
                  </div> */}
                </div>
              </div>
            )
          }
        </div>
      </div>

    </>

  // TODO: Add a node here

  )
}

export default SideBar