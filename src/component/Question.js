import React from "react";
import { FaChevronDown } from "react-icons/fa";

function Question() {
  return (
    <div className="mx-10 md:mx-20 lg:mx-32 my-20">
      <h2 className="font-semibold text-xl md:text-2xl flex justify-center text-black mb-10">
        Frequently Asked Questions
      </h2>
      <div className=" flex justify-between items-center mt-5 mb-5 text-sm">
        <p>What sizes do you offer?</p>
        <FaChevronDown />
      </div>
      <hr />
      <div className=" flex justify-between items-center mt-5 mb-5 text-sm">
        <p>What sizes do you offer?</p>
        <FaChevronDown />
      </div>
      <hr />
      <div className=" flex justify-between items-center mt-5 mb-5 text-sm">
        <p>What sizes do you offer?</p>
        <FaChevronDown />
      </div>
      <hr />
    </div>
  );
}

export default Question;
