import BlogSingleTemplate from '@/components/templates/BlogSingleTemplate';
import { projectData } from '@/lib/data/projectsData';
import { projectTemplateInterFace } from '@/lib/interface/projectsInterface';
import React from 'react'
import LeftSideBar from '../questions/LeftSIdeBar/LeftSideBar';

const FeaturesBlog = () => {
    let project: projectTemplateInterFace[] = projectData.slice(0, 6)

    return (
        <div className='container_2'>
            <div className="flex flex-col justify-start mt-8 divide-y lg:flex-row">
                <h2 className="heading_2 font-[500] text-[16px] uppercase ms-5">Features Posts</h2>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col">
                {project.map((project: projectTemplateInterFace) => (
                    <BlogSingleTemplate key={project._id} {...project} />
                ))}
               </div>
              </div>
              <div className="w-full -mt-16 lg:w-1/3 ps-5 ms-10">
                <LeftSideBar />
              </div>
            </div>
            
        </div>
    )
}

export default FeaturesBlog;