import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import TagList from './TagList';
// import { faTwitter, faFacebook } from '@fortawesome/fontawesome-free';

const Footer = () => {
  return (
   <div className="bg-gray-200 dark:bg-c_bg_dark Border"> 
    <div className='pt-5 container_2'>
     <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-x-2 lg:mt-15">
       <div className="flex flex-col">
         <h2 className="flex w-20 mb-5 uppercase border-b-2 border-gray-400 dark:border-gray-600 heading_3">About Us</h2>
           <p className="mb-3 paragraph_text text-[15px] leading-6 mr-5">Start writing, no matter what. The water does not flow until the faucet is turned on.</p>
          <h3 className="paragraph_text text-[15px] leading-6">Address</h3>
          <p className="paragraph_text text-[15px] leading-6">123 Main Street <br/>New York, NY 10001</p>      
          <p className="paragraph_text text-[15px] leading-6 mt-6">Follow Me</p>
              <div className="flex flex-row gap-x-3">
                <Link href='#'><FontAwesomeIcon className='text-[5px] text-violet-950 bg-white w-5 h-5 rounded-full' icon={faFacebook} /> </Link>
            <Link href='#'><FontAwesomeIcon className='text-[5px] text-white bg-blue-700 w-5 h-5 rounded-full' icon={faTwitter} /> </Link>
            <Link href='#'><FontAwesomeIcon className='text-[5px] text-c_neutral bg-white w-5 h-5 rounded-full' icon={faPinterest} /> </Link>
              </div>    
       </div>
       {/* Quick Links */}
       <div className="flex flex-col">
          <h2 className="flex w-24 pb-1 mb-2 uppercase border-b-2 border-gray-400 dark:border-gray-600 heading_3">Quick Links </h2>
          <Link href='/' className='my-2 uppercase paragraph_text'>Home</Link>
          <Link href='/blogs' className='my-2 uppercase paragraph_text'>All Posts</Link>
          <Link href='/blogs' className='my-2 uppercase paragraph_text'> Our Blogs </Link>
          <Link href='/questions' className='my-2 uppercase paragraph_text'> Find Questions </Link>
          <Link href='/questions' className='my-2 uppercase paragraph_text'> Find Answers</Link>
          <Link href='/projects' className='my-2 uppercase paragraph_text'>Projects Showcase</Link>
       </div>
       {/* NEWSLETTER */}
       <div className="flex flex-col lg:-ml-16">
          <h2 className="flex pb-1 mb-2 uppercase border-b-2 border-gray-400 w-36 dark:border-gray-600 heading_3">Our Newsletter </h2>
          <p className="mb-3 paragraph_text text-[15px] leading-6 mr-5">Subscribe to our newsletter and get our newest updates right on your inbox.</p>
          <form className='flex flex-col'>
            <div className="flex flex-row">
            <input type="text" className='h-12 bg-white border-l rounded-l-full dark:bg-c_bg_dark w-44 Border' name="newsLatter" />
            <button className='h-12 px-2 rounded-r-full heading_3 bg-c_primary' type="button">Subscribe</button>
            </div>
            
            <div className="flex flex-row mt-5"><input type="checkbox" className='mr-2' name="terms and conditions " /> <p className='paragraph_text text-[15px] leading-6 '> I agree to the terms & conditions </p>  </div>
          </form>
          
       </div>
      {/* Tag Lists */}
       <div className="flex flex-col">
        <TagList/>
       </div>
        </div> 
     </div>
     <div className='border-[0.5px] border-gray-300 dark:border-gray-700 mt-5'></div>
     <div className="flex flex-row justify-between pt-5 pb-5 container_2">
        <p className='paragraph_text'>© 2023, All content copyright goes to this website</p>
        <p className="paragraph_text">Design by AliThemes | All rights reserve</p>
     </div>
    </div>
  )
}

export default Footer;