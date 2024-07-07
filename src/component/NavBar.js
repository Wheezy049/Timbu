import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';

function NavBar() {
  return (
    <div className=' my-10 mx-24 flex justify-between items-center'>
        <div className='bg-white p-2 rounded shadow'>
            <p className='p-2 text-xl font-semibold'>TIMBU`S STORE</p>
        </div>
        {/* <div className=''>
            <ul className='flex gap-9'>
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
            </ul>
        </div> */}
        <div className='flex items-center gap-2'>
            <p className='text-xl font-bold'>Cart</p>
            <FaCartArrowDown style={{height: '20px', width: '20px'}} />
        </div>
    </div>
  )
}

export default NavBar