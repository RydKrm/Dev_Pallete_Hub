'use client'
import { projectTemplateInterFace } from "@/lib/interface/projectsInterface";
import { faArrowUp, faArrowDown,faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import LeftSideBar from "../LeftSIdeBar/LeftSideBar";

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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat iste, commodi, totam cum delectus explicabo doloribus quam odio molestias a cumque fuga porro animi quis repellat neque temporibus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat iste, commodi, totam cum delectus explicabo doloribus quam odio molestias a cumque fuga porro animi quis repellat neque temporibus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fugiat iste, commodi, totam cum delectus explicabo doloribus quam odio molestias a cumque fuga porro animi quis repellat neque temporibus perferendis!",
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
        <div className="container flex flex-row h-auto dark:bg-c_bg_dark">
            <div className="w-full mt-8 lg:w-2/3">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-4/5 ms-10">
                        <div className="flex flex-col">
                            <h2 className="capitalize heading_2 text-[30px] hover:text-violet-600">
                                {details.name}
                            </h2>
                            <div className="flex mt-3 mb-2 ">
                                {details.tags.map((tag: { _id: number; tag: string }, index: number) => (
                                    <p className={`first:ms-0 mx-1 tag_text text-base mt-2 ${colors[index % 4]} `} key={tag._id}>{tag.tag}.</p>
                                ))}
                            </div>
                            <div className='mt-3 '>
                                <div className='flex flex-row mt-2 '>
                                   <div className="flex flex-row text-c_secondary me-3">
                                        <FontAwesomeIcon icon={faArrowUp} className="text-4xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[18px]  text-c_secondary ms-2">246</p>
                                            <p className="heading_2 text-[12px]  text-c_secondary ms-2">UPVOTES</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row text-c_neutral me-3">
                                        <FontAwesomeIcon icon={faArrowDown} className="text-4xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[18px] text-c_neutral ms-2">186</p>
                                            <p className="heading_2 text-[12px] text-c_neutral ms-2">DOWNVOTES</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row text-c_primary">
                                        <FontAwesomeIcon icon={faComment} className="text-4xl"/> 
                                        <div className="flex flex-col">
                                            <p className="heading_2 text-[18px] text-c_primary ms-2">63</p>
                                            <p className="heading_2 text-[12px]  text-c_primary ms-2">COMMENTS</p>
                                        </div>
                                    </div>
                                </div>
                               

                                {/* TODO Users Profile Shows */}
                                <div className="flex flex-row mt-5">
                                    <Image src='/project/project_1.jpg' className="w-12 h-12 mt-4 rounded-full ring-2 ring-c_primary" width={320} height={320} alt="Profile Image" />
                                    <div className="flex flex-col mt-6 ms-4">
                                        <h2 className="heading_3">John Deo</h2>
                                        <p className="paragraph_text">React Developer </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-10 ms-10">
                 <h2 className="capitalize heading_2 text-[30px] hover:text-violet-600">Answers</h2>
                    <div className="w-full pb-5 mt-4 shadow-md Border ps-5 pe-5">
                        <div className="flex flex-row mt-5">
                            <Image src='/project/project_1.jpg' className="w-12 h-12 mt-4 rounded-full ring-2 ring-c_primary" width={320} height={320} alt="Profile Image" />
                            <div className="flex flex-col mt-6 ms-4">
                                <h2 className="heading_3">John Deo</h2>
                                <p className="paragraph_text">React Developer </p>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: details.description }} className='mt-3 md:me-16 ms-2 paragraph_text text-[14px] leading-5 ' />
                      {/* Replays */}
                        <h2 className="capitalize heading_2 text-[30px] hover:text-violet-600 mt-3">Reply</h2>
                        <div className="w-full pb-5 mt-4 shadow Border ps-5 pe-3 ">
                            <div className="flex flex-row mt-5">
                                <Image src='/project/project_1.jpg' className="w-12 h-12 mt-4 rounded-full ring-2 ring-c_primary" width={320} height={320} alt="Profile Image" />
                                <div className="flex flex-col mt-6 ms-4">
                                    <h2 className="heading_3">John Deo</h2>
                                    <p className="paragraph_text">React Developer </p>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: details.description }} className='mt-3 md:me-16 ms-2 paragraph_text text-[14px] leading-5 pe-3' />
                        </div>

                        <div className="w-full pb-5 mt-4 shadow Border ps-5 pe-3">
                            <div className="flex flex-row mt-5">
                                <Image src='/project/project_1.jpg' className="w-12 h-12 mt-4 rounded-full ring-2 ring-c_primary" width={320} height={320} alt="Profile Image" />
                                <div className="flex flex-col mt-6 ms-4">
                                    <h2 className="heading_3">John Deo</h2>
                                    <p className="paragraph_text">React Developer </p>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: details.description }} className='mt-3 md:me-16 ms-2 paragraph_text text-[14px] leading-5 pe-3' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:w-1/3 lg:block ps-8">
                <LeftSideBar />
            </div>
        </div>
    );
};

export default SingleDonation;