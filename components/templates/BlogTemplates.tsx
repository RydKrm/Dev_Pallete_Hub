import Image from 'next/image'
import React from 'react'

const BlogTemplates = () => {
  return (
    <div className='w-[300px] h-[130px] border-[1px] border-gray-200 dark:border-gray-700 mb-5 shadow-sm hover:mb-5 hover:shadow-xl rounded'>
       <div className="flex flex-row items-center justify-center mt-7 ms-8">
         <Image src='/project/project_1.jpg' className='w-16 h-16 rounded-full hover:w-[70px] hover:h-[70px] me-2' alt='blog image' width={320 } height={320} />
         <div className="flex flex-col ms-3">
         <h2 className="mb-2 heading_2 text-[18px]">React.js</h2>
         <p className="paragraph_text me-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
       </div>
       </div>
       
    </div>
  )
}

export default BlogTemplates