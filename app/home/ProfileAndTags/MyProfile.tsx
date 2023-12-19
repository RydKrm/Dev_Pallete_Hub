import Image from 'next/image'
import React from 'react'

const MyProfile = () => {
  return (
    <div className='flex flex-col mt-5 rounded-md bg-c_primary '>
      <div className="flex flex-row mx-10 mt-10 mb-2">
        <Image src="/home/featured.png" className='w-20 h-20 rounded-full ring-2 ring-white me-4' height={320} width={320} alt='My Profile Image' />
        <div className="flex flex-col">
          <h2 className="mt-2 text-white heading_2">Al Riyad Karim</h2>
          <p className="text-white heading_3">Web Developer and Competitive Programmer</p>
        </div>
      </div>
          <p className="mx-10 mb-10 heading_4 mt-3 text-[14px] leading-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque dolorem esse alias! Debitis ratione perspiciatis optio libero unde id?</p>
    </div>
  )
}

export default MyProfile