import React from 'react'
import ProjectTopMenu from './TopMenu';
import ProjectTemplate from './ProjectTemplate';
import { projectData } from '../../lib/data/projectsData';
import { projectTemplateInterFace } from '@/lib/interface/projectsInterface';

export interface ProjectContentProps {
  handleOpen: () => void
  // other props... 
  // 
}

const ProjectContent: React.FC<ProjectContentProps> = ({ handleOpen }) => {
  return (
    <div className='container max-w-screen-lg mx-auto mt-8 divide-y'>
      <ProjectTopMenu handleOpen={handleOpen} />
      <div className="flex flex-col pt-4 mt-7">
        {projectData.map((project: projectTemplateInterFace) => (
          <ProjectTemplate key={project._id} {...project} />
        ))
        }
      </div>
    </div>
  )
}

export default ProjectContent;