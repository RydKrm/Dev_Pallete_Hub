'use client'
import { deleteTag, getTagList } from '@/actions/tag.action'
import { TagInterface } from '@/lib/interface/user.interface';
import { faCancel, faClose, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Schema } from 'mongoose';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const DeleteTag = () => {
  const [tagList,setTagList] = useState<TagInterface[]>([]);

  useEffect(()=>{
     const fetchTag = async()=>{
      const tags:any = await getTagList();
      setTagList(tags);
      console.log('tagList ',tags);
     }
     fetchTag();
  },[])

  
  const path = usePathname();
  const handleDelete = async (singleTag:string) => {
   const isDelete:boolean = await deleteTag(singleTag,path);
   if(isDelete){ 
     toast.success('Tag Deleted',{
      position:'bottom-right',
      autoClose:2000
     })
     const newList: any = tagList.filter((tag: any) => tag.tag !== singleTag);
     console.log('new tag list ', newList);
     console.log(' type of tag ', tagList[0].tag, " ", singleTag)
     setTagList(newList);
   }
  }
  return (
      <div className="flex flex-col justify-center">
          <h2 className="text-xl heading_3 ms-10 ">Tag List</h2>
          <ul className='mt-3 ml-10 capitalize w-44'>
             {tagList.map((tag:TagInterface)=>(
                <li className='flex flex-row justify-between p-2 my-3 shadow-lg Border' key={tag.tag}> 
                  <p>{tag.tag}</p>
                  <p><FontAwesomeIcon icon={faClose} onClick={()=>{handleDelete(tag.tag)}}/></p>
                </li>
             ))}
          </ul>
          <ToastContainer 
            position='bottom-right'
            theme='dark'
          />
      </div>
  )
}

export default DeleteTag;