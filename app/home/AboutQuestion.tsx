import Image from 'next/image'
import React from 'react'

const AboutQuestion = () => {
  return (
    <div className='container my-10 pb-10 flex flex-col lg:flex-row justify-between w-[425px] md:w-full'>
        <div className='f_col w-[425px] md:w-[500px] lg:mt-16 mt-10 justify-center text-center lg:text-left'>
           <h2 className="text_h2 font-medium text-5xl capitalize">We provide the best web services</h2>
           <p className="text_h5 mt-10">Lorem ipsum dolor sit amet consectetur adipiscing elit, curae posuere donec tellus eu egestas aliquet, lacinia parturient facilisi quam dictum suspendisse. Tincidunt gravida vivamus</p>
           <div className='w-[400px] bg-slate-100 dark:bg-slate-700 border-l-4 border-c_tertiary dark:border-c_primary mt-10'>
                <ol type='1' className='my-10 ms-10'>
                    <li className=''>Most easy premium web design process</li>
                    <li>Research & development before starting</li>
                    <li>Making a quality design ideas</li>
                </ol>
           </div>
        </div>
        
        <div className="relative " >
            <h2 className="text_h2 absolute top-[10%] w-[220px] ml-5 leading-10 ">Add Your Project <br/> Show The World<br/> Who You Are? <br/> Find The Way <br/> Ask A Question <br/>
            We Are Here To Help <br/> Love Your Work </h2>
           <Image src='/slider/slider_4.jpg' 
        className='w-[500px] h-[600px] rounded-xl border_c '
        alt='project image' 
        height={1200} 
        width={500} /> 
        </div>
         
    </div>
  )
}

export default AboutQuestion;