'use client'
import { Button } from '@/components/ui/button'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

interface SideBarProps {
  handleOpen: () => void
}

const tags: { _id: number | string, tag: string }[] = [
  { _id: 1, tag: 'HTML' },
  { _id: 2, tag: 'CSS3' },
  { _id: 3, tag: 'JavaScript' },
  { _id: 4, tag: 'React.js' },
  { _id: 5, tag: 'Next.js' },
  { _id: 6, tag: 'TypeScript' }
]

const projects: { _id: number | string, project: string }[] = [
  { _id: 1, project: 'Empower Crowed Funding By Prople' },
  { _id: 2, project: 'Thread Zone Multi Verdor Ecommerce projects' },
  { _id: 3, project: 'Book Treasure, For Selling and Buying Best Book ' },
  { _id: 4, project: 'Pizza Delivery Ride Shared App' },
  { _id: 5, project: 'University Class Test Assisment Project' },
  { _id: 6, project: 'Attendance Management System For Any DepartMent ' }
]

const SideBar: React.FC<SideBarProps> = ({ handleOpen }) => {

  return (
    <>
      <div className='f_col  lg:ms-10 lg:mt-14'>
        <p className=' lg:hidden mb-5 bg-c_tertiary dark:bg-c_primary text-white pt-1 pl-2 w-8 h-8 rounded-md' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /> </p>
        <div>
          <h2 className='heading_2 mb-4'>Seclect Tags</h2>
          {
            tags.map(tag => <p className='heading_3 text-sm dark:text-slate-300 font-thin my-1' key={tag._id}>{tag.tag}</p>)
          }
        </div>
        <div>
          <h2 className='heading_2 mb-4 mt-10'>Recent Projects </h2>
          {
            projects.map(project => <p className=' w-48 heading_3 text-sm dark:text-slate-300 font-thin my-1' key={project._id}>{project.project}</p>)
          }
        </div>

      </div>

    </>


  )
}

export default SideBar