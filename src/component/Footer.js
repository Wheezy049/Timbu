import React from 'react';
import { FaCopyright, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='mt-10 px-10 md:px-20 lg:px-32 py-10 bg-black'>
      <div className='block md:flex justify-between mb-10'>
        <div className='text-white text-left mb-10 md:mb-0'>
          <h2 className='font-bold text-base pb-2'>TIMBUS'S STORE</h2>
          <p className='text-xs'>Step into Style with Every Step You Take.</p>
          <div className='flex gap-3 md:gap-5 mt-3 text-black'>
            <div className='bg-purple-700 w-6 h-6 flex justify-center items-center'><FaFacebook style={{ width: '14px', height: '14px' }} /></div>
            <div className='bg-purple-700 w-6 h-6 flex justify-center items-center'><FaInstagram style={{ width: '14px', height: '14px' }} /></div>
            <div className='bg-purple-700 w-6 h-6 flex justify-center items-center'><FaTwitter style={{ width: '14px', height: '14px' }} /></div>
            <div className='bg-purple-700 w-6 h-6 flex justify-center items-center'><FaTiktok style={{ width: '14px', height: '14px' }} /></div>
          </div>
        </div>
        <div className='text-white text-left'>
          <h2 className='font-semibold text-base'>Subscribe to our newsletter</h2>
          <div className='flex gap-0 sm:w-52  md:w-72 mt-3 bg-none border border-solid rounded'>
            <input type='email' placeholder='your email' className='bg-black border-none text-white text-xs  ml-1 md:ml-2 outline-none flex-1 p-2' />
            <button className='bg-purple-700  hover:border-b-purple-800 cursor-pointer text-xs md:text-sm border-l rounded border-l-white p-1 md:p-2'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className='border-gray-700' />
      <div className='flex justify-between text-white mt-2 text-xs'>
        <div className='flex gap-2 items-center'>
          <FaCopyright />
          <p>Timbu's Store</p>
        </div>
        <p className=''>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
