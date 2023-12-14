'use client'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { projectData } from '../../lib/data/projectsData';
import { projectInterFace } from '@/lib/interface/projectsInterface';
import Image from 'next/image';

interface SideBarProps {
  handleOpen: () => void
}

const tags: { _id: number | string, tag: string }[] = [
  { _id: 1, tag: 'HTML' },
  { _id: 2, tag: 'CSS3' },
  { _id: 3, tag: 'JavaScript' },
  { _id: 4, tag: 'React.js' },
  { _id: 5, tag: 'Next.js' },
  { _id: 6, tag: 'TypeScript' },
  { _id: 7, tag: 'PHP'},
  { _id: 8, tag: 'Laravel'},
  { _id: 9, tag: 'TailWind CSS'},
  { _id:10, tag: 'Vue.js'},
  { _id:11, tag: 'MySQL'},
  { _id:12, tag: 'MongoDB'},
  { _id:13, tag: 'Node.js'},
  { _id:14, tag: 'Express.js'},
  {_id:15,  tag: 'Deno.js'}

]

// const projects: { _id: number | string, project: string, image:string}[] = [
//   { _id: 1, project: 'Empower Crowed Funding By Prople', image: '/project/project_1.jpg', },
//   { _id: 2, project: 'Thread Zone Multi Verdor Ecommerce projects', image: '/project/project_1.jpg', },
//   { _id: 3, project: 'Book Treasure, For Selling and Buying Best Book ', image: '/project/project_1.jpg', },
//   { _id: 4, project: 'Pizza Delivery Ride Shared App', image: '/project/project_1.jpg', },
//   { _id: 5, project: 'University Class Test Assisment Project', image: '/project/project_1.jpg', },
//   { _id: 6, project: 'Attendance Management System For Any DepartMent ', image: '/project/project_1.jpg', }
// ]

const projects:projectInterFace[] = projectData;

const colors = ["text-c_primary", "text-c_secondary", "text-c_tertiary", "text-c_neutral"];

const SideBar: React.FC<SideBarProps> = ({ handleOpen }) => {

  return (
    <>
      <div className='f_col  lg:ms-10 lg:mt-14'>
        <p className=' lg:hidden mb-5 bg-c_tertiary dark:bg-c_primary text-white pt-1 pl-2 w-8 h-8 rounded-md' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /> </p>
        <div>
          <h2 className='heading_2 mb-4'>Seclect Tags</h2>
          {
            tags.map((tag,index) => <p className= {`heading_3 text-sm dark:text-slate-300 font-thin my-1 hover:${ colors[index % 4]} `} key={tag._id}>{tag.tag}</p>)
          }
        </div>
        <div>
          <h2 className='heading_2 mb-4 mt-10'>Recent Projects </h2>
          {
            projects.map(project => 
            <div key={project._id} className='flex flex-row my-5'>
              <Image className="w-28 h-24" src={project.image} height={450} width={450} alt='React Post Image' />
              <div className='flex flex-col'>
                  <p className=' w-48 heading_3 text-sm dark:text-slate-300 font-thin my-1 ms-3' >{project.name}</p>
                    <div className="grid grid-cols-3 gap-y-2 mb-2 ms-3">
                    {project.tags.map((tag: { _id: number; tag: string }, index: number) => (<p className={`mx-1 tag_text ${colors[index % 4]} `} key={tag._id}>{tag.tag}.</p>))}
                </div>

              </div>
              
            </div>
            )
          }
        </div>

      </div>

    </>


  )
}

export default SideBar