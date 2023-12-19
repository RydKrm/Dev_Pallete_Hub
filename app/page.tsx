import Banner from './home/Banner'
import FeaturesProjects from './home/featuresProjects'
import FeaturesBlog from './home/FeaturesBlogs'
import OurGoal from './home/OurGoal'
import ProfileAndTags from './home/ProfileAndTags/ProfileAndTags'

export default function Home() {

  const handleButton = ()=>{
    console.log('checking')
  }

  return (
    <div className='w-full'>
    <Banner />
    <OurGoal />
    <ProfileAndTags />
    <FeaturesProjects />
    <FeaturesBlog/>

     </div>
    
  )
}
