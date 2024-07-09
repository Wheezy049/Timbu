import React from "react";
import icon1 from "./assest/icon1.png";
import image22 from "./assest/image22.png";

function Hero2() {
  return (
    <div className="sm:mx-10 sm:my-16 md:my-20 md:mx-20 lg:mx-32 lg:my-40">
      <h2 className="font-semibold text-xl md:text-2xl flex justify-center">Why Choose Us</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center mt-10">
        <div className="block md:hidden bg-gray-100 border">
          <img src={image22} alt="image22" className="h-52 w-52 object-cover" />
        </div>
        <div>
          <div className="m-10 md:mx-0 mt-0 md:mb-16 lg:mb-24">
            <img
              src={icon1}
              alt="icon1"
              id="icon"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">INNOVATIVE DESIGNS</h3>
            <p className="text-sm font-medium text-gray-400">
              Stay ahead of the fashion curve with our cutting-edge designs.
            </p>
          </div>
          <div className="m-10 md:mx-0 mb-0">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">
              CUSTOMER LOYALTY DISCOUNTS
            </h3>
            <p className="text-sm font-medium text-gray-400">
              Enjoy exclusive rewards, discounts, and early access to new
              collections.
            </p>
          </div>
        </div>
        <div className="hidden md:block bg-gray-100 border mt-10">
          <img src={image22} alt="image22" className="h-60 w-60 object-cover" />
        </div>
        <div>
          <div className="m-10 mt-0 sm:mt-0 md:mt-10 md:mx-0 md:mb-16 lg:mb-24">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">QUALITY CRAFTSMANSHIP</h3>
            <p className="text-sm font-medium text-gray-400">
              Our shoes are of high-quality to ensure durability and style
            </p>
          </div>
          <div className="m-10 md:mx-0">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">EXCEPTIONAL SERVICE</h3>
            <p className="text-sm font-medium text-gray-400">
              Enjoy free shipping, easy returns, and dedicated customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
