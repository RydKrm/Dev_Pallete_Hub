import { Button } from '@/components/ui/button';
import React from 'react'
import ProjectTopMenu from './TopMenu';
import ProjectTemplate from './ProjectTemplate';
import { projectData } from '../../lib/data/projectsData';
import { projectTemplateInterFace } from '@/lib/interface/projectsInterface';

export interface ProjectContentProps {
  handleOpen: () => void
  // other props...
}

const ProjectContent: React.FC<ProjectContentProps> = ({ handleOpen }) => {
  return (
      <div className='container max-w-screen-lg mx-auto divide-y mt-8'>
        <ProjectTopMenu handleOpen={handleOpen} />
        <div className="mt-7 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project: projectTemplateInterFace) => (
            <ProjectTemplate key={project._id} {...project} />
          ))
          }
        </div>
        {/* <DonationPagenation totalData={totalData} /> */}
      </div>
  )
}

export default ProjectContent;