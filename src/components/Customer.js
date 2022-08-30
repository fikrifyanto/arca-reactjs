import React from "react";
import customer from "../images/customer.jpg";

function Customer() {
  return (
    <div className="h-full">
      <div className="float-left h-full w-[50%] flex pt-32 pl-24">
        <div>
          <h1 className="text-5xl font-light tracking-wider leading-tight">
            Our customers <br /> Our biggest customers
          </h1>
          <div className="h-1 w-24 bg-black mt-8 mb-16"></div>
          <p className="w-96">We have helped startup around the globe as well as fortune many companies </p>
          <div className="h-16 w-44 mt-8 flex items-center justify-center px-8 bg-gradient-to-r from-[#9FD685] to-[#F9DD03]">
            <h3 className="font-bold text-lg text-white uppercase">More</h3>
          </div>
        </div>
      </div>
      <a href="" className="float-right h-full w-[50%] pt-28">
        <img className="w-3/4" alt="" src={customer} />
      </a>
    </div>
  );
}

export default Customer;
