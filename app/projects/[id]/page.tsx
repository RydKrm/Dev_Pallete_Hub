'use client'
import SectionTitle from "@/components/shared/SectionTitle";
import { projectTemplateInterFace } from "@/lib/interface/projectsInterface";
import { faClock, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const SingleDonation = () => {
    const { id } = useParams();
    //states
    const [details, setDetails] = useState<projectTemplateInterFace>({
        _id: 1,
        name: 'Empower Rise Crowd Funding ',
        title: 'For Collecting fund and donated money to people who are helpless',
        tags: [
            { _id: 1, tag: 'React.js' },
            { _id: 2, tag: 'Node.js' },
            { _id: 3, tag: 'MongoDB' },
            { _id: 4, tag: 'Express.js' }
        ],
        image: '/project/project_1.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat iste, commodi, totam cum delectus explicabo doloribus quam odio molestias a cumque fuga porro animi quis repellat neque temporibus perferendis!",
        liveLink: 'https://empower-rise.web.app/',
        clientLink: 'https://github.com/RydKrm/empowerRise-client',
        serverLink: 'https://github.com/RydKrm/empowerRise-client',
        upvotes: 1220,
        downvotes: 230,
        comments: 150,

    });
    const [user, setUser] = useState(null);
    const [reload, setReload] = useState(0);

    return (
        <div >
            <SectionTitle img={details.image} title={details.title} />
            <div className="container font-poppins mb-36 mt-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/5 md:h-[480px]">
                        <Image
                            className='w-full md:w-[670px] md:h-full flex justify-center'
                            src={details.image}
                            alt={details.title}
                            height={1024}
                            width={1024} />
                    </div>
                    <div className="w-full md:w-2/5 ms-10">
                        <div className="flex flex-col">
                            <h2 className="heading_1 font-black hover:text-violet-600 capitalize">
                                {details.title}
                            </h2>
                            <div className=' mt-5 divide-y'>
                                <div className="flex justify-between font-light text-xs">

                                </div>

                                <div className='mt-4'>
                                    <h2 className='text-4xl leading-10 font-black mt-2'>${ }</h2>
                                    <div className='flex flex-row'>
                                        <p className='mt-2 text-gray-400 font-light'>raised of</p>
                                        <p className='text-black mt-2 ms-2'>  ${ } </p>
                                    </div>
                                    <p className="text-sm font-light text-gray-400"><span className='text-black font-normal'>{ }%</span> of total money is collected</p>

                                    <p className="text-md text-gray-400 font-light "><span className='font-normal text-black'><FontAwesomeIcon icon={faCompass} className='me-2' /></span> city </p>
                                    <div className="flex flex-row mt-2">

                                    </div>
                                </div>
                                <div className="mt-8 mb-6">
                           
                                </div>
                                <div className='my-5'>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col-reverse md:flex-row ">
                    <div className="w-full md:w-3/5 ">
                        <div dangerouslySetInnerHTML={{ __html: details.description }} className='text-justify md:me-16 ms-8' />

                    </div>
                    <div className="w-full md:w-2/5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDonation;