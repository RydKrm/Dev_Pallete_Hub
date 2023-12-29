import Banner from './(OtherPage)/home/Banner'
import FeaturesProjects from './(OtherPage)/home/featuresProjects'
import FeaturesBlog from './(OtherPage)/home/FeaturesBlogs'
import OurGoal from './(OtherPage)/home/OurGoal'
import ProfileAndTags from './(OtherPage)/home/ProfileAndTags/ProfileAndTags'

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
