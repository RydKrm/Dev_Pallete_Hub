import {faPersonArrowUpFromLine, faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const DashBoardNavbar = () => {
  return (
    <ul className="pt-5 rounded-md heading_3">
      <li className='flex flex-row'><FontAwesomeIcon icon={faPersonArrowUpFromLine} className='text-xl -me-5' /> <Link href="/dashboard/profilePage"> Profile Page </Link> </li>
      <li className='flex flex-row'><FontAwesomeIcon icon={faTags} className='text-xl -me-5' /> <Link href="/dashboard/tagList"> Tag List </Link> </li>
      <li className='flex flex-row'> <FontAwesomeIcon icon={faTag} className='text-xl -me-5' /> <Link href="/dashboard/createTag"> Create Tag </Link></li>
    </ul>
  )
}

export default DashBoardNavbar;