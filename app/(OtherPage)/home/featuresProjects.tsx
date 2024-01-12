import ProjectSingleTemplate from '@/components/templates/ProjectSingleTemplates';
import { projectData } from '@/lib/data/projectsData';
import { projectTemplateInterFace } from '@/interface/projectsInterface';
import React from 'react'

const FeaturesProjects = () => {
    let project:projectTemplateInterFace[] = projectData.slice(0,6)

  return (
    <div className='container_2'>
      <div className="flex flex-col justify-between mt-8 lg:flex-row">
        <h2 className="heading_2 font-[500] text-[16px] uppercase ms-5">Features Posts</h2>
        <h3 className="heading_2 font-[500] text-[16px] uppercase me-5">Find Most Closed Posts To You</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {project.map((project: projectTemplateInterFace) => (
            <ProjectSingleTemplate key={project._id} {...project} />
            
        ))}
      </div>
    </div>
  )
}

export default FeaturesProjects;