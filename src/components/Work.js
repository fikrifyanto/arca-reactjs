import React from "react";
import work from "../images/work.jpg";

function Work() {
  return (
    <div className="h-full">
      <div className="float-left h-full w-[50%] relative">
        <img className="h-full w-full inset-0 absolute object-cover" alt="" src={work} />
        <div className="h-full w-full inset-0 absolute flex items-center pl-24">
          <div>
            <h1 className="text-5xl font-light tracking-wider leading-tight">
              How <br /> We Work
            </h1>
            <div className="h-1 w-24 bg-black mt-8 mb-16"></div>
            <p className="w-64">Let's discuss what projects you have in mind </p>
            <a href="" className="h-16 w-44 mt-8 flex items-center justify-center px-8 bg-gradient-to-r from-[#9FD685] to-[#F9DD03]">
              <h3 className="font-bold text-lg text-white uppercase">More</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="float-right h-full w-[50%]  flex items-center justify-center">
        <div className="grid grid-cols-2 h-96 w-96">
          <div className="col-span-1 flex items-center justify-end">
            <div className="h-1 w-24 bg-black"></div>
          </div>
          <div className="col-span-1 bg-gradient-to-b from-[#9FD685] to-[#F9DD03] relative">
            <h1 className="font-semibold text-white opacity-50 text-[100px] absolute bottom-0 right-0 leading-none">01</h1>
            <h4 className="text-2xl font-medium absolute top-8 left-4">Discuss</h4>
          </div>
          <div className="col-span-1 bg-gradient-to-b from-gray-200 to-gray-50 relative">
            <h1 className="font-semibold text-gray-200 text-[100px] absolute bottom-0 right-0 leading-none">02</h1>
            <h4 className="text-2xl font-medium absolute top-8 left-4">Planning</h4>
          </div>
          <div className="col-span-1 bg-gradient-to-b from-gray-200 to-gray-50 relative">
            <h1 className="font-semibold text-gray-200 text-[100px] absolute bottom-0 right-0 leading-none">03</h1>
            <h4 className="text-2xl font-medium absolute top-8 left-4">Coding</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
