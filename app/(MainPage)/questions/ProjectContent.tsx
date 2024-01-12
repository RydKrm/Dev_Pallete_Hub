'use client'
import React, { useEffect, useState } from 'react'
import ProjectTopMenu from './TopMenu';
import { getAllQuestion } from '@/actions/question.action';
import { getQuestionInterface } from '@/interface/question.interface';
import ProjectTemplate from './ProjectTemplate';
import Head from 'next/head';

export interface ProjectContentProps {
  handleOpen: () => void,
 // questionList:getQuestionInterface
}

const ProjectContent: React.FC<ProjectContentProps> = ({ handleOpen}) => {

  const [questionList,setQuestionList] = useState<getQuestionInterface[]>([]);
  console.log('question list from contents =>  ',questionList);

  useEffect(()=>{
   const fetchQuestionList = async () =>{
    const data:getQuestionInterface[] = await getAllQuestion();
    setQuestionList(data);
   }
   fetchQuestionList();
  },[])

  // TODO create a Pagination System 
  
  return (
    <div className='container max-w-screen-lg mx-auto mt-8 divide-y'>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Description of your page" />
      </Head>
      <ProjectTopMenu handleOpen={handleOpen} />
      <div className="grid grid-cols-1 pt-4 mt-7 md:grid-cols-2 gap-x-4">
        {
       questionList.map((project: getQuestionInterface) => (
         <ProjectTemplate key={project.title} {...project} />
       ))
        }
      </div>
    </div>
  )
}

export default ProjectContent;
