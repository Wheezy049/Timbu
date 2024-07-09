import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import all_product from "./assest/AllProduct";
import { Link } from "react-router-dom";

function CarouselShop() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" hidden md:block md:mx-20 lg:mx-32 my-16">
      <h2 className="bg-purple-300 text-md text-left p-2 text-black font-semibold mb-10">
        Shop Best Sellers
      </h2>
      <div className="">
        <Carousel responsive={responsive} className="">
          {all_product.map((product) => {
            return (
              <div className=" bg-white shadow p-6 text-left text-sm font-semibold w-52 h-52">
                <Link to={`/product/${product.id}`}><img src={product.image} alt="shoe" /></Link>
                <p className="mt-4">{product.name}</p>
                <p>${product.price}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselShop;
