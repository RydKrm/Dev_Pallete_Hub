import { projectTemplateInterFace } from '@/lib/interface/projectsInterface'
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectTemplate = (project: projectTemplateInterFace) => {
    return (
        <div className='shadow-md w-[280px] my-5 flex flex-col justify-center font-poppins  dark:bg-zinc-950 '>
            <div className='w-full'>
                <Image src={project.image} className='w-full h-[210px]' alt="post.title" height={1024} width={1024} />
            </div>
            {/* Details Container */}
            <div className='mx-3 mt-10'>
                <div className="grid grid-cols-3 gap-x-1 gap-y-2 mb-5">
                    {project.tags.map((tag: { _id: number; tag: string }) => (<p className='mx-1 border border-c_tertiary dark:border-c_primary ps-1 text-sm' key={tag._id}>{tag.tag}</p>))}
                </div>
                {/* <div className='flex flex-row'>
                    <div className="text-sm mt-1 text-gray-500 ms-2 me-1 font-light"></div>
                    <div className="text-sm mt-1 text-gray-500 ms-5 font-light"></div>
                </div> */}
                <Link href={`/SingleDonation/${project._id}`} className='text_h4 mt-5'>{project.name} </Link>
                <p className="text_h5 text-sm mt-2">{project.title}</p>
                <div className="f_row justify-between mx-5 my-2">
                    <p><FontAwesomeIcon icon={faArrowUp} className='text_h3 text-sm me-1' /> {project.upvotes} </p>
                    <p><FontAwesomeIcon icon={faArrowDown} className='text_h3 text-sm me-1' /> {project.downvotes} </p>
                    <p><FontAwesomeIcon icon={faComment} className='text_h3 text-sm me-1' /> {project.comments} </p>

                </div>

            </div>
        </div>
    )
}

export default ProjectTemplate;

//  : React.FC<projectTemplateInterFace> 