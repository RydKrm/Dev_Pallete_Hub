'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '@/app/darkMode';

const Navbar = () => {
    return (
        <nav className="navbar bg-transparent ">
            <div className="navbar-start w-full lg:max-w-6xl flex justify-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52">
                        <li><Link href='/projects'> Projects</Link></li>
                        <li><Link href='/question'> Questions </Link></li>
                        <li><Link href='/add_project'> Add Project </Link></li>
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost normal-case text-xl">Empower Rise</Link>
            </div>

            <div className="navbar-center hidden lg:flex bg-transparent">
                <ul className="menu menu-horizontal px-1 bg-transparent">
                    <li><Link href='/projects'> Projects</Link></li>
                    <li><Link href='/question'> Questions </Link></li>
                    <li><Link href='/add_project'> Add Project </Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-4 lg:mr-20">
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