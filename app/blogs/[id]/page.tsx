'use client'
import SectionTitle from "@/components/shared/SectionTitle";
import { projectTemplateInterFace } from "@/lib/interface/projectsInterface";
import { faArrowUp, faArrowDown,faComment } from "@fortawesome/free-solid-svg-icons";
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
    const colors = ["text-c_primary", "text-c_secondary", "text-c_tertiary", "text-c_neutral"];

    return (
        <div  className="h-auto">
            <SectionTitle img={details.image} title={details.title} />
            <div className="container mt-8 font-poppins ">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/5 md:h-[430px]">
                        <Image
                            className='w-full md:w-[670px] md:h-full flex justify-center'
                            src={details.image}
                            alt={details.title}
                            height={1024}
                            width={1024} />
                    </div>
                    <div className="w-full md:w-2/5 ms-10">
                        <div className="flex flex-col">
                            <h2 className="font-black capitalize heading_1 hover:text-violet-600">
                                {details.name}
                            </h2>
                            <div className='mt-5 divide-y '>
                                <div className="flex justify-between text-xs font-light">
                                  <p className="heading_2">{details.title}</p>
                                </div>

                                <div className='flex flex-col mt-4 lg:flex-row'>
                                   <div className="flex flex-row mt-3 text-c_secondary me-3">
                                        <FontAwesomeIcon icon={faArrowUp} className="text-6xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[30px] mt-2 text-c_secondary ms-2">246</p>
                                            <p className="heading_2 text-[18px] mt-2 text-c_secondary ms-2">UPVOTES</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 text-c_neutral me-3">
                                        <FontAwesomeIcon icon={faArrowDown} className="text-6xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[30px] mt-2 text-c_neutral ms-2">186</p>
                                            <p className="heading_2 text-[18px] mt-2 text-c_neutral ms-2">DOWNVOTES</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 text-c_primary">
                                        <FontAwesomeIcon icon={faComment} className="text-5xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[30px] mt-2 text-c_primary ms-2">63</p>
                                            <p className="heading_2 text-[18px] mt-2 text-c_primary ms-2">COMMENTS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-8 mb-6 ">
                                  {details.tags.map((tag:{_id:number;tag:string},index:number)=>(
                                    <p className={`first:ms-0 mx-1 tag_text text-base mt-2 ${colors[index % 4]} `} key={tag._id}>{tag.tag}.</p>
                                  ))}
                                </div>

                                {/* TODO Users Profile Shows */}
                                <div className="flex flex-row mt-5">
                                    <Image src='/project/project_1.jpg' className="w-16 h-16 mt-4 rounded-full ring-2 ring-c_primary" width={320} height={320} alt="Profile Image" />
                                    <div className="flex flex-col mt-7 ms-4">
                                        <h2 className="heading_3">John Deo</h2>
                                        <p className="paragraph_text">React Developer </p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col-reverse mt-10 md:flex-row">
                    <div className="w-full ">
                        <div dangerouslySetInnerHTML={{ __html: details.description }} className='text-justify md:me-16 ms-8 paragraph_text' />
                    </div>
                    {/* <div className="w-full md:w-2/5">

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleDonation;