import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBarsProgress, faBlog, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons/faPersonCircleQuestion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface  singleGoalInterface {
   goalName:string,
   goalText:string,
   goalIcon:IconProp,
   color:string
}

const SingleGoal = ({goalName,goalText, goalIcon,color}:singleGoalInterface)=>{
   return(
    <div className={`flex flex-col mx-5 w-[220px] rounded-md ${color} `}>
      <FontAwesomeIcon icon={goalIcon} className='mt-4 text-6xl text-white' />
      <h3 className="mx-4 text-white heading_2">{goalName}</h3>
      <h3 className="mx-4 mt-2 mb-3 text-white heading_3">{goalText}</h3>
    </div>
   )
}

const OurGoal = () => {
  return (
    <div className='container_2 lg:h-[70vh] flex flex-col justify-center items-center'>
        <h2 className="mb-10 text-center heading_1">What We Do??</h2>
      <div className='grid grid-cols-1 container_2 md:grid-cols-2 lg:grid-cols-4 '>
        <SingleGoal 
        goalName='Show Your Project' 
        goalText='Show the world, How goad you are? What kind of product you can build. People Love To See That' 
        goalIcon={faBarsProgress}
        color='bg-c_primary'
        />
        <SingleGoal
            goalName='Ask Your Question'
            goalText='A right place to learn a lesson. Feel free to ask any question our developer will answer'
            goalIcon={faPersonCircleQuestion}
            color='bg-c_secondary'
        />
        <SingleGoal
            goalName='Post Your Blog'
            goalText='Share your knowledge. People here to learn from your. You have an oppertuanity to share knowledge'
            goalIcon={faBlog}
            color='bg-c_tertiary'
        />
        <SingleGoal
            goalName='Share Your Knowledge'
            goalText='Make tutorial on what you know. Make a project and share with people how do you do that'
            goalIcon={faPersonChalkboard}
          color='bg-c_neutral'
        />
      </div>  
        
    </div>
  )
}

export default OurGoal