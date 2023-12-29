import Link from 'next/link';
import React from 'react'

const DashBoardNavbar = () => {
  return (
    <ul className="pt-5 rounded-md heading_3">
      <li><Link href="/dashboard/profilePage"> Profile Page </Link> </li>
      <li> <Link href="/dashboard/tagList"> Tag List </Link> </li>
      <li><Link href="/dashboard/createTag"> Create Tag </Link></li>
    </ul>
  )
}

export default DashBoardNavbar;