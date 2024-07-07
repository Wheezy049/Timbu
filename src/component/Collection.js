import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

function Collection() {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='mx-32 mt-10'>
      <p className='bg-purple-400 text-md text-left p-2 text-black font-semibold'>Featured Collections</p>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {
          all_product ? all_product.map((item) => (
            <div key={item.id}>
              <div className='bg-white shadow p-6 text-left text-sm font-bold'>
                <Link to={`/product/${item.id}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className='h-40 w-40 cursor-pointer'
                  />
                </Link>
                <p className='mt-4'>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </div>
          )) : <div>Loading...</div>
        }
      </div>
    </div>
  );
}

export default Collection;
