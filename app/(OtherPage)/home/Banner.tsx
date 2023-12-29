import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="lg:h-[80vh] lg:w-full flex flex-row bg-gray-200 dark:bg-zinc-800 ">
            <div className="container flex flex-row justify-between">
                <div className="w-full mb-10 lg:mt-32 lg:w-7/12 ms-10 lg:pe-20">
                    <h2 className="heading_1">Welcome to <span className='text-c_primary'> Dev Platte</span>  Website. Find You Passions</h2>
                    <p className='mt-2 mb-2 heading_2'>Showcase your best Project. Learn From Other Project </p>
                    <p className="my-1 heading_3">Ask Your Question. Find your best answer</p>
                    <p className='heading_3'>Teach Other. Learn From Other</p>
                </div>
                <div className="hidden lg:w-5/12 lg:block">
                    <Image className='w-[400px] h-[350px] mt-16'
                        src='/home/featured.png' alt='Banner Image' width={1020} height={1020} />
                </div>
            </div>
     
    </div>
    );
};

export default Banner;