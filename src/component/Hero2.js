import React from "react";
import icon1 from "./assest/icon1.png";
import image22 from "./assest/image22.png";

function Hero2() {
  return (
    <div className=" sm:mx-10 md:mx-20 lg:mx-32 mt-10 mb-24">
      <h2 className="text-2xl font-bold">Why Choose Us</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center mt-10">
        <div className=" block md:hidden bg-gray-100 border mt-10">
          <img src={image22} alt="image22" className="h-72 w-72" />
        </div>
        <div>
          <div className="m-10 md:mb-16 lg:mb-32">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">INNOVATIVE DESIGNS</h3>
            <p className="text-sm">
              Stay ahead of the fashion curve with our cutting-edge designs.
            </p>
          </div>
          <div className="m-10 md:mb-16 lg:mb-32">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">
              CUSTOMER LOYALTY DISCOUNTS
            </h3>
            <p className="text-sm">
              Enjoy exclusive rewards, discounts, and early access to new
              collections.
            </p>
          </div>
        </div>
        <div className=" hidden md:block bg-gray-100 border mt-10">
          <img src={image22} alt="image22" className="h-72 w-72" />
        </div>
        <div>
          <div className="m-10 md:mb-16 lg:mb-32">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">QUALITY CRAFTSMANSHIP</h3>
            <p className="text-sm">
              Our shoes are of high-quality to ensure durability and style
            </p>
          </div>
          <div className="m-10 md:mb-16 lg:mb-32">
            <img
              src={icon1}
              alt="icon1"
              className="w-5 h-5 flex justify-center m-auto mb-2 text-purple-700"
            />
            <h3 className="text-base font-semibold">EXCEPTIONAL SERVICE</h3>
            <p className="text-sm">
              Enjoy free shipping, easy returns, and dedicated customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
