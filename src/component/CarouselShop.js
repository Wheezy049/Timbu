import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import all_product from './assest/AllProduct';

function CarouselShop() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='mx-32 my-16'>
        <h2 className='bg-purple-500 text-md text-left p-2 text-black font-semibold mb-10'>Shop Best Sellers</h2>
        <Carousel responsive={responsive}>
            {
                all_product.map((product)=>{
                    return(
                        <div className=' bg-white shadow p-6 text-left text-sm font-bold w-52 h-52'>
                            <img src={product.image} alt='shoe'/>
                            <p className='mt-4'>{product.name}</p>
                            <p>${product.price}</p>
                        </div>
                    )
                })
            }
  {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
</Carousel>;
    </div>
  )
}

export default CarouselShop