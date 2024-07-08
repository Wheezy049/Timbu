import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-10 md:mx-20 lg:mx-32 my-20">
      <h2 className="font-semibold text-xl md:text-2xl flex justify-center text-black mb-10">
        Frequently Asked Questions
      </h2>

      {['What sizes do you offer?', 'What materials are your shoes made of?', 'How do I care for my shoes?'].map((question, index) => (
        <div key={index} className="bg-white w-full p-2 mt-2 mb-2">
          <div
            className="flex justify-between  items-center text-sm cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <p>{question}</p>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <div className="mt-2 text-left text-xs text-gray-600">
              <p>We offer a wide range of sizes for men, women, and children. Our size guide is available on each product page to help you find the perfect fit.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
