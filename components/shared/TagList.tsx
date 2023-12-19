import { tagData } from '@/lib/data/tagData'
import React from 'react'

const TagList = () => {
  return (
    <div className='w-full'>
      <h2 className=" heading_2">Tag Lists </h2>
          <div className='flex flex-wrap'>
        {
        tagData.map((tag: { _id: number | string, tag: string },index:number)=> (
          <h2 key={index} className="px-2 pt-1 pb-1 mx-2 mt-3 bg-gray-300 rounded-full shadow-md dark:bg-gray-700 heading_3">{tag.tag}</h2>
        ))
      }
      </div>
      
    </div>
  )
}

export default TagList