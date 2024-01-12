'use client'
import { createTag } from '@/actions/tag.action';
import { Button } from '@/components/ui/button';
import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTag = () => {
    const [tagName,setTagName] = useState<string>('');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
     const isCreated:boolean = await createTag(tagName);
     if(isCreated) {
       toast.success('Tag is Created',{
        position:'bottom-right',
        theme:'colored',
        autoClose:2000

       });
     } else {
        toast.error('Tag not created',{
         position:'bottom-right',
         theme:'colored',
         autoClose:2000,
        })
     }
    }
  return (
      <div className='my-10 mt-10 ms-14'>
          <form method="post" className='flex flex-col' onSubmit={handleSubmit}>
              <input type="text" name="Category" id="category" placeholder='Add Category' className='h-10 mb-5 rounded shadow-md w-80 Border bg-c_bg_light dark:bg-c_bg_dark heading_3 ps-3' onBlur={(e)=>{setTagName(e.target.value)}} />
              <Button variant='submit' className='w-28' type="submit" >Add Category</Button>
          </form>
          <ToastContainer />
      </div>
  )
}

export default AddTag;