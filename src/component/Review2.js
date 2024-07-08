import React from "react";
import profile from "./assest/profile.png";
import icon5 from "./assest/icon5.png";
import icon4 from "./assest/icon4.png";

function Review2() {
  return (
    <div className="text-left mt-16 md:mt-40">
      <h1 className="text-2xl font-bold mb-7">Recent Review</h1>
      <div className=" md:flex gap-7 items-center">
        <div className="flex gap-4 ">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profilePicture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold ">
              <span className=" text-green-700">Recommended</span> by Aviv Tel 2
              july 2024
            </h2>
            <div className="bg-white border-2 border-gray-100 mb-10  rounded-md mt-5 p-5">
              <p>
                Great shoes, very stylish and comfortable. I just wish they had
                more color options. Otherwise, I’m very satisfied.
              </p>
              <div className="flex gap-6 items-center h-5 w-5 mt-4">
                <img src={icon4} alt="like" />
                <img src={icon5} alt="comment" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profilePicture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold ">
              <span className=" text-green-700">Recommended</span> by Aviv Tel 2
              july 2024
            </h2>
            <div className="bg-white border-2 border-gray-100 rounded-md mb-10 mt-5 p-5">
              <p>
                Great shoes, very stylish and comfortable. I just wish they had
                more color options. Otherwise, I’m very satisfied.
              </p>
              <div className="flex gap-6 items-center h-5 w-5 mt-4">
                <img src={icon4} alt="like" />
                <img src={icon5} alt="comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex gap-7 items-center">
        <div className="flex gap-4">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profilePicture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className=" flex-1">
            <h2 className="text-base font-semibold ">
              <span className=" text-green-700">Recommended</span> by Aviv Tel 2
              july 2024
            </h2>
            <div className="bg-white border-2 border-gray-100 mb-10  rounded-md mt-5 p-5">
              <p>
                Great shoes, very stylish and comfortable. I just wish they had
                more color options. Otherwise, I’m very satisfied.
              </p>
              <div className="flex gap-6 items-center h-5 w-5 mt-4">
                <img src={icon4} alt="like" />
                <img src={icon5} alt="comment" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profilePicture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold ">
              <span className=" text-green-700">Recommended</span> by Aviv Tel 2
              july 2024
            </h2>
            <div className="bg-white border-2 border-gray-100 rounded-md mb-10 mt-5 p-5">
              <p>
                Great shoes, very stylish and comfortable. I just wish they had
                more color options. Otherwise, I’m very satisfied.
              </p>
              <div className="flex gap-6 items-center h-5 w-5 mt-4">
                <img src={icon4} alt="like" />
                <img src={icon5} alt="comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review2;
