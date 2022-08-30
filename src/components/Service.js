import React from "react";
import service from "../images/service.jpg";

function Service() {
  return (
    <div className="h-full">
      <div className="float-left h-full w-[30%] flex pt-32 pl-24">
        <div>
          <h1 className="text-5xl font-light tracking-wider leading-tight">
            What <br /> We do?
          </h1>
          <div className="h-1 w-24 bg-black mt-8 mb-16"></div>
          <ul className="list-disc list-inside">
            <li>Mobile Applications</li>
            <li>Web Applications</li>
            <li>UI & UX Design</li>
          </ul>
        </div>
      </div>
      <div className="float-right h-full w-[70%] pt-28">
        <div className="relative w-full h-96">
          <img className="absolute h-full w-full object-top object-cover" alt="" src={service} />
          <div className="absolute h-full w-full bg-opacity-50 bg-[#D1E45A] p-16">
            <h2 className="text-4xl">
              Mobile <br /> Application
            </h2>
            <p className="w-96 mt-6">Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
