import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

function Collection() {
    const {all_product} = useContext(ShopContext)
  return (
    <div className=' mx-32 mt-10'>
        <p  className=' bg-purple-500 text-md text-left p-2 text-black font-semibold'>Featured Collections</p>
        <div className=' grid grid-cols-4 gap-4 mt-10'>
       {
          all_product.map((item)=>{
            if (!all_product) {
                return <div>Loading...</div>;
            }
            return(
                <div key={item.id}>
                    <div className=' bg-white shadow p-6 text-left text-sm font-bold'>
                        <img src={item.image} alt='shoe' className=' h-40 w-40'/>
                        <p className='mt-4'>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            )
          })
       }
        </div>
    </div>
  )
}

export default Collection