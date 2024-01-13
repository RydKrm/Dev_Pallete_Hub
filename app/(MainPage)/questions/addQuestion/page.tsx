'use client'
import { createQuestion } from '@/actions/question.action';
import { getTagList } from '@/actions/tag.action';
import TextEditor from '@/components/templates/TextEditor';
import { Button } from '@/components/ui/button';
import DropDown from '@/components/ui/dropdown';
import InputText from '@/components/ui/input-text';
import useUserInfo from '@/customHook/useUserInfo';
import { TagInterface } from '@/interface/user.interface';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Formik } from 'formik';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';

const AddQuestion = () => {
  const [tagList, setTagList] = useState<TagInterface[]>([]);
  const [getTag,setGetTag] = useState<TagInterface[]>([]);
  const [description,setDescription] = useState<string>('');
  const [maxTag,setMaxTag] = useState<boolean>(false);
  const { userId } = useUserInfo();

  console.log('user id testing in questions ', userId);
  
  useEffect(()=>{
    const fetchTag = async()=>{
      const list = await getTagList();
      setTagList(list);
    }
    fetchTag();
  },[])

  const handleTag = (e: ChangeEvent<HTMLInputElement>) => {
    if(getTag.length >=5) {
      setMaxTag(true); 
      return ;
    } else {
      setMaxTag(false);
    }
    const inputValue: string = e.target.value;
    const [tag, _id] = inputValue.split('-');
    const newItem:any = {tag,_id}
    setGetTag((item) => [...item, newItem]);
  };

  const handleDeleteTag = (tag:string) =>{
     const newTag = getTag.filter((item)=>tag !==item.tag);
     setGetTag(newTag);
  }

  const handleTextEditor = (text:string) =>{
    setDescription(text);
    console.log('testing editor ', text)
  }

  return (
    <div className='flex items-center justify-center w-full '>
      <div className="flex flex-col rounded-md container_2 bg-c_bg_light dark:bg-c_bg_dark ">
        <div className="px-16 pb-16 mx-10 my-5 shadow-2xl ">
          <Formik
            initialValues={{
              title: '',
            }}
            validationSchema={Yup.object({
              title: Yup.string()
              .min(10, 'Must be 10 characters or more')
              .required('Required')
            })}
            onSubmit={async (values, { setSubmitting }) => {
              
              const newValue = {
                ...values,
                tagList:getTag,
                description,
                userId
              }
              
              const  isCreated = await createQuestion(newValue);
              if (isCreated) {
                toast.success('Question is Created', {
                  position: 'bottom-right',
                  theme: 'colored',
                  autoClose: 2000
                });
                setDescription('');
                setGetTag([]);
               // router.push('/questions')
              } else {
                toast.error('Question not created', {
                  position: 'bottom-right',
                  theme: 'colored',
                  autoClose: 2000,
                })
              }
            }}
          >
            <Form>
              <h2 className="mt-8 mb-5 text-center heading_2">Add Question</h2>
              <InputText label="" name="title" type="text" placeholder="Title" />
              <div className="grid grid-cols-3 my-3 gap-x-1 gap-y-2">
                {getTag.map((tag:TagInterface)=>(
                <span className='flex flex-row justify-between px-2 py-1 mx-1 rounded-md shadow-md Border heading_3' key= {tag.tag}>
                  {tag.tag}
                  <FontAwesomeIcon icon={faXmark} className='mt-1 cursor-pointer ms-1' onClick={()=>{handleDeleteTag(tag.tag)}} />
                </span>))}
              </div>
              {maxTag && <h2 className='my-4 text-red-500 heading_4'>Max 5 Tag can be added</h2>}
              {/* <DropDown handler={handleTag} list={tagList} classList="w-52 ps-3 rounded-full mb-5"/> */}
              
              <TextEditor handleEditor={handleTextEditor} />
              <Button variant={'submit'} type="submit" className='w-40 mx-auto mt-5'>Submit</Button>

            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddQuestion;