import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="lg:h-[80vh] lg:w-full">
            <Carousel >
                <div className="relative h-[90vh] lg:h-[80vh] dark:bg-neutral-800">
                    <Image className="h-full dark:opacity-20 w-full" src='/slider/slider_3.jpg' alt="Banner Image" width={1024} height={1024} />
                    <div className="absolute top-[20%] md:top-[15%] lg:top-[15%] md:left-[35%] lg:left-[50%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2 ">
                        <p className="text-c_tertiary dark:text-c_primary lg:text-xl mb-2">We Offer Can You Help</p>
                        <h1 className="lg:text-6xl font-bold font-serif leading-tight sm:text-2xl md:text-3xl text_h2">BETTER <br /> WORLD FOR OUR <br /> CHILDREN</h1>
                        <Button variant={'submit'} size={'lg'} className='mt-5'> Ask a Question </Button> 
                    </div>
                </div>
                <div className="relative h-[90vh] lg:h-[80vh] dark:bg-neutral-800 bg-gradient-to-l from-c_text_black to-c_pure_black">
                    <Image className="h-full dark:opacity-20 w-full bg-no-repeat bg-contain  " src='/slider/slider_4.jpg' alt="Banner Image" width={1024} height={1024} />
                    <div className="absolute top-[20%] md:top-[15%] lg:top-[15%] md:left-[35%] lg:left-[50%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2 ">
                        <p className="text-c_tertiary dark:text-c_primary lg:text-xl mb-2">We Offer Can You Help</p>
                        <h1 className="lg:text-6xl font-bold font-serif leading-tight sm:text-2xl md:text-3xl text_h1 text-3xl">GIVING IS THE<br /> GREATEST  <br/> ACT OF GRACE</h1>
                        <Button variant={'submit'} size={'lg'} className='mt-5' >Project Show</Button>
                    </div>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;