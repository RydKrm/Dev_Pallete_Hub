'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '@/app/darkMode';

const Navbar = () => {
    return (
        <nav className="container bg-transparent navbar ">
            <div className="flex justify-center w-full navbar-start lg:max-w-6xl">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52">
                        <li><Link href='/projects'> Projects</Link></li>
                        <li><Link href='/blogs'> Blogs </Link></li>
                        <li><Link href='/questions'>Questions</Link></li>
                        <li><Link href='/add_project'> Add Project </Link></li>
                    </ul>
                </div>
                <Link href='/' className="text-xl normal-case btn btn-ghost">Empower Rise</Link>
            </div>

            <div className="hidden bg-transparent navbar-center lg:flex">
                <ul className="px-1 bg-transparent menu menu-horizontal">
                    <li><Link href='/projects'> Projects</Link></li>
                    <li><Link href='/blogs'> Blogs </Link></li>
                    <li><Link href='/questions'>Questions</Link></li>
                    <li><Link href='/add_project'> Add Project </Link></li>
                </ul>
            </div>
            <div className="mr-4 navbar-end lg:mr-20">
                <div style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%", // This will create a circular shape
                    overflow: "hidden" // To clip the image within the circular container
                }}>
                    <Image
                        src={''}
                        alt="User"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar;