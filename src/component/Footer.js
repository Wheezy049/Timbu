import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className=' mt-10  bg-black px-32 py-20'>
        <div className=' flex justify-between mb-10'>
            <div className=' text-white text-left'>
                <h2 className=' font-bold text-base pb-2'>TIMBUS`S STORE</h2>
                <p className=' text-sm'>Step into Style with Every Step You Take.</p>
                <div className=' flex gap-5 mt-3 text-black'>
                    <div className=' bg-purple-500 w-6 h-6 flex justify-center items-center'><FaFacebook style={{width: '14px', height: '14px'}}/></div>
                    <div className=' bg-purple-500 w-6 h-6 flex justify-center items-center'><FaInstagram style={{width: '14px', height: '14px'}}/></div>
                    <div className=' bg-purple-500 w-6 h-6 flex justify-center items-center'><FaTwitter style={{width: '14px', height: '14px'}}/></div>
                    <div className=' bg-purple-500 w-6 h-6 flex justify-center items-center'><FaTiktok style={{width: '14px', height: '14px'}}/></div>
                </div>
            </div>
            <div className='text-white text-left'>
                <h2 className='font-bold text-base'>Subscribe to our newsletter</h2>
                <div className=' flex mt-3 bg-none border border-solid rounded'>
                    <input type='email' placeholder=' your email' className='bg-black border-none outline-none ml-3' />
                    <p className=' bg-purple-500 border-l border-l-white p-2'>Subscribe</p>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <div className=' flex justify-between text-white mt-2 text-sm'>
                <div className=' flex gap-2 items-center'>
                    <FaCopyright />
                    <p>Timbu`s Store</p>
                </div>
                <p>All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer