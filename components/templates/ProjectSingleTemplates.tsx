import { projectTemplateInterFace } from '@/lib/interface/projectsInterface'
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectSingleTemplate = (project: projectTemplateInterFace) => {

    const colors = ["text-c_primary", "text-c_secondary", "text-c_tertiary", "text-c_neutral"];

    return (
        <div className='shadow-md w-[350px] my-5 flex flex-col justify-center   font-poppins rounded-xl mx-auto overflow-hidden hover:shadow-2xl hover:mb-5 transition duration-250 dark:border-[1px] dark:border-gray-700 '>
            <div className='w-full'>
                <Image src={project.image} className='w-full h-[210px]' alt="post.title" height={1024} width={1024} />
            </div>
            {/* Details Container */}
            <div className='mx-3 mt-10 mb-5 ms-5'>
                <div className="flex flex-row mb-2 gap-y-2">
                    {project.tags.map((tag: { _id: number; tag: string }, index: number) => (<p className={`first:ms-0 mx-1 tag_text ${colors[index % 4]} font-[600]`} key={tag._id}>{tag.tag}.</p>))}
                </div>
                <Link href={`/projects/${project._id}`} className='mt-2 heading_2'>{project.name} </Link>
                {/* TODO poster profile will be add here  */}
                <p className="mt-2 paragraph_text">{project.title}</p>
                <div className="mx-5 my-2 f_row justify-left">
                    <p className='heading_3 me-3'><FontAwesomeIcon icon={faArrowUp} className='date_text me-1' /> {project.upvotes} </p>
                    <p className='heading_3 me-3'><FontAwesomeIcon icon={faArrowDown} className='date_text me-1' /> {project.downvotes} </p>
                    <p className='heading_3'><FontAwesomeIcon icon={faComment} className='date_text me-1' /> {project.comments} </p>

                </div>

            </div>
        </div>
    )
}

export default ProjectSingleTemplate;

//  : React.FC<projectTemplateInterFace> 