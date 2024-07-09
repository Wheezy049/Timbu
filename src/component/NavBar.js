import React, { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

function NavBar() {
  const {cartItem} =useContext(ShopContext);
  const totalUniqueItems = Object.keys(cartItem).filter(itemId => cartItem[itemId] > 0).length;
  return (
    <div className=' my-10 mx-10 md:mx-16 lg:mx-24 flex justify-between items-center'>
        <div className='bg-white p-2 rounded shadow'>
           <Link to='/'> <p className='p-1 md:p-2 text-sm  md:text-xl font-semibold'>TIMBU`S STORE</p> </Link>
        </div>
        <div className='flex items-center gap-2'>
            <p className=' hidden md:block text-xl font-semibold'>Cart({totalUniqueItems})</p>
            <Link to='/cart'><FaCartArrowDown style={{height: '20px', width: '20px', cursor: 'pointer'}} /></Link>
        </div>
    </div>
  )
}

export default NavBar