import { userInterface } from '@/interface/user.interface';
import { faBlog, faChalkboardUser, faClipboardQuestion, faCommentDots, z } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

interface UserHomeProfileProps {
    user: userInterface;
}

const UserHomeProfile: React.FC<UserHomeProfileProps> = ({ user }) => {
    const { _id, image, name, title, totalAnswer, totalBlog, totalProject, totalQuestion, totalTutorial } = user;

    return (
        <div className='border-[1px] Border flex flex-ro3 h-[150px] rounded-md shadow-md hover:shadow-xl'>
            <Image src={image} className='w-12 h-12 mt-5 rounded-full ring-2 ring-c_primary ms-5' height={220} width={220} alt='user image' />
            <div className="flex flex-col mt-3 mb-3 ms-5">
                <h2 className="heading_2 font-[500]">{name}</h2>
                <h3 className="my-1 heading_3">{title}</h3>
                <p className="paragraph_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatibus?</p>
                <div className="flex flex-row mt-3">
                    <h3 className="heading_3 me-2"> <FontAwesomeIcon icon={faClipboardQuestion} className='text-lg me-2' />{totalQuestion}</h3>
                    <h3 className="heading_3 me-2"> <FontAwesomeIcon icon={faCommentDots} className='text-lg me-2' />{totalAnswer}</h3>
                    <h3 className="heading_3 me-2"> <FontAwesomeIcon icon={faChalkboardUser} className='text-lg me-2' />{totalProject}</h3>
                    <h3 className="heading_3 me-2"> <FontAwesomeIcon icon={faBlog} className='text-lg me-2' />{totalBlog}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserHomeProfile;
