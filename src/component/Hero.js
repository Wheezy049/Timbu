import React from "react";
import image1 from "./assest/image1.png";
import image2 from "./assest/image2.png";
import image3 from "./assest/image3.png";
import image4 from "./assest/image4.png";
import image5 from "./assest/image5.png";
import image6 from "./assest/image6.png";
import image7 from "./assest/image7.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 md:mt-28">
      <div className="relative w-80 md:w-96 h-80 md:h-96 flex justify-center items-center">
        <div className="text-center absolute">
          <h1 className="text-2xl font-bold w-64 m-auto flex justify-center">
            Step Up Your Shoe Game
          </h1>
          <p className="text-sm mt-2 w-72 md:w-96">
            Our diverse range of shoes is designed to make you feel your best,
            no matter where you're headed.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-700 text-sm text-white rounded hover:bg-purple-600">
            SHOP NOW
          </button>
        </div>
        <div className="absolute w-80 md:w-96 h-80 md:h-96 rotate-clockwise hidden sm:flex">
          <div className="shoe">
            <img src={image1} alt="image1" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image2} alt="image2" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image3} alt="image3" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image7} alt="image7" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image6} alt="image6" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image5} alt="image5" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
          <div className="shoe">
            <img src={image4} alt="image4" className="w-24 md:w-36 h-24 md:h-36" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
