import React from "react";
import home from "../images/home.jpg";

function Home() {
  return (
    <div className="h-full">
      <div className="h-full pl-24 float-left flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-light tracking-wider leading-tight">
            Our Product <br /> We Deliver
          </h1>
          <div className="h-1 w-24 bg-black mt-8 mb-16"></div>
          <p className="w-64">Twiscode specializes in developing high-performing mobile and web applications.</p>
          <a href="" className="flex items-center mt-8 gap-1">
            <div className="bg-black first:flex w-16 h-16 items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_31)">
                  <path d="M33.3542 22.9167H8.33334V27.0833H33.3542V33.3333L41.6667 25L33.3542 16.6667V22.9167Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_31">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="h-16 flex items-center px-8 bg-gradient-to-r from-[#9FD685] to-[#F9DD03]">
              <h3 className="font-bold text-lg text-white uppercase">Let's look at more</h3>
            </div>
          </a>
        </div>
      </div>
      <img alt="" className="float-right h-full" src={home} />
    </div>
  );
}

export default Home;
