import BlogTemplates from '@/components/templates/BlogTemplates';
import React from 'react'

const LeftSideBar = () => {
  const arr = [1,2,3,4,5,6,7]
  return (
    <div className='mt-12'>
      <div className="mb-5 heading_2">Latest Blogs</div>
      {
        arr.map((ar:number,index:number)=>(
          <BlogTemplates key={index} />
        ))
      }
    </div>
  )
}

export default LeftSideBar;