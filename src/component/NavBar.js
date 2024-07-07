import React from 'react'
import { FaCartArrowDown, FaUser } from 'react-icons/fa';

function NavBar() {
  return (
    <div className=' my-10 mx-24 flex justify-between align-middle'>
        <div className='bg-white p-2 rounded shadow'>
            <p className='p-2 text-xs'><span>ROLA`S</span> <br /> STORE</p>
        </div>
        <div className=''>
            <ul className='flex gap-9'>
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className='flex gap-4'>
            <FaCartArrowDown />
            <FaUser  />
        </div>
    </div>
  )
}

export default NavBar