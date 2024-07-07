import React from "react";
import { FaStar } from "react-icons/fa";

function Review() {
  return (
    <div className="my-12 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <h2 className="font-bold text-2xl md:text-3xl flex justify-center">
        Reviews we love to see
      </h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
        <div className="bg-white shadow p-4 rounded text-center w-full sm:w-48 md:w-60 lg:w-80">
          <p className="text-xl md:text-sm lg:text-xl">
            "Best purchase ever! My feet have never felt better. The quality is
            top-notch, and the design is sleek and modern. Will definitely buy
            again."
          </p>
          <h3 className="my-3 font-bold">Akolade M.</h3>
          <div className="flex gap-2 justify-center text-purple-700">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded text-center w-full sm:w-48 md:w-60 lg:w-80">
          <p className="text-xl md:text-sm lg:text-xl">
            "These shoes are a game-changer! Stylish and incredibly comfortable.
            I wore them all day without any discomfort. Highly recommend!"
          </p>
          <h3 className="my-3 font-bold">Akolade M.</h3>
          <div className="flex gap-2 justify-center text-purple-700">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded text-center w-full sm:w-48 md:w-60 lg:w-80">
          <p className="text-xl md:text-sm lg:text-xl">
            "Fantastic customer service and fast shipping. The sneakers are
            exactly as described. I’ve received so many compliments on them."
          </p>
          <h3 className="my-3 font-bold">Akolade M.</h3>
          <div className="flex gap-2 justify-center text-purple-700">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
