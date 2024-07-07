import React from 'react'
import { FaBars, FaCartArrowDown } from 'react-icons/fa';

function NavBar() {
  return (
    <div className=' my-10 mx-10 md:mx-16 lg:mx-24 flex justify-between items-center'>
        <div className='bg-white p-2 rounded shadow'>
            <p className='p-1 md:p-2 text-xs  md:text-xl font-semibold'>TIMBU`S STORE</p>
        </div>
        {/* <div className=''>
            <ul className='flex gap-9'>
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
            </ul>
        </div> */}
        <div className='flex items-center gap-2'>
            <p className=' hidden md:block text-xl font-bold'>Cart</p>
            <FaCartArrowDown style={{height: '20px', width: '20px'}} />
            <div className=' block md:hidden'><FaBars /></div>
        </div>
    </div>
  )
}

export default NavBar