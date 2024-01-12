'use client'
import { getTagList } from '@/actions/tag.action';
import { TagInterface } from '@/interface/user.interface';
import React, { useEffect, useState } from 'react';

const TagList = () => {
  const [tagData,setTagData] = useState<TagInterface[]>([])
  useEffect(()=>{
    const fetchTag = async()=>{
      const tagList: any = await getTagList();
      setTagData(tagList);
    }
    fetchTag();
  },[])
  return (
    <div className='w-full'>
      <h2 className=" heading_2">Tag Lists </h2>
          <div className='flex flex-wrap'>
        {
        tagData.map((tag:TagInterface)=> (
          <h2 key={tag.tag} className="px-2 pt-1 pb-1 mx-2 mt-3 capitalize bg-gray-300 rounded-full shadow-md dark:bg-gray-700 heading_3">{tag.tag}</h2>
        ))
      }
      </div>
    </div>
  )
}

export default TagList