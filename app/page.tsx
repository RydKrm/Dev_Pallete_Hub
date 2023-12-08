'use client'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './darkMode'
import Banner from './home/Banner'
import AboutProject from './home/AboutProject'
import AboutQuestion from './home/AboutQuestion'

export default function Home() {

  const handleButton = ()=>{
    console.log('checking')
  }

  return (
    <div className='w-full'>
    <Banner />
    <AboutProject />
    <AboutQuestion/>
    
    {/* <Button onClick={handleButton}>ADD CLICK</Button> 
    <h2 className='text-large'> Testing Tailwind Color </h2> 
    <div className="flex flex-row mx-5 mt-20">
      <Button className='mx-5 ' size={'default'} variant={'submit'}>Submit </Button>
      <Button className='mx-5' size={'lg'} variant={'destructive'}>Destructibe</Button>
      <Button className='mx-5' size={'sm'} variant={'ghost'}> Ghost </Button>
      <Button className='mx-5' size={'icon'} variant={'outline'}> Outline </Button>
      <Button className='mx-5' variant={'secondary'}>Secondary</Button>
    </div>

     <div className="flex flex-row gap-x-5">
      <p className="text_p"> Lorem ipsum dolor! </p>
      <p className="text_h1"> Text h1 </p>
      <p className="text_h2"> Text h2  </p>
      <p className="text_h3"> Text h3 </p>
      <p className="text_h4"> Text h4  </p>
      <p className="text_h5"> Text h5  </p>
      <p className="text_h6"> Text h6  </p>
     </div> */}

     </div>
    
  )
}
