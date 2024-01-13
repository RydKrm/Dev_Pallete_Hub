import { getQuestionInterface } from '@/interface/question.interface';
import { TagInterface } from '@/interface/user.interface';
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const ProjectTemplate = (project: getQuestionInterface) => {
    const colors = ["text-c_primary", "text-c_secondary", "text-c_tertiary", "text-c_neutral"];
    // TODO create a up voting and down voting system with user authentication 
    // TODO Show question template system 
    const handleVoting = ()=>{
        
    }
    return (
        <div className='shadow-md w-full mb-5 flex flex-row justify-left place-items-start rounded-xl mx-auto overflow-hidden hover:shadow-2xl hover:mb-5 transition duration-250 dark:border-[1px] dark:border-gray-700 me-3'>
          <div className='mx-3 mb-5 lg:mt-8 ms-5'>
            <Link href={`/questions/${project._id}`} className='mt-2 heading_2 font-[900]'>{project.title} </Link>
              <div className="flex flex-row my-4 mb-2 gap-y-2">
                {project.tagList.map((tag:TagInterface,index) => (<p className={`first:ms-0 mx-1 tag_text ${colors[index % 4]} `} key={tag.tag}>{tag.tag}.</p>))}
              </div>
                <div className="my-2 mt-4 f_row justify-left">
                    <p className='heading_3 me-3'><FontAwesomeIcon icon={faArrowUp} className='date_text me-1' /> {project.upVotes.length} </p>
                    <p className='heading_3 me-3'><FontAwesomeIcon icon={faArrowDown} className='date_text me-1' /> {project.downVotes.length} </p>
                    <p className='heading_3'><FontAwesomeIcon icon={faComment} className='date_text me-1' /> {project.answer.length} </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate;

//  : React.FC<projectTemplateInterFace> 