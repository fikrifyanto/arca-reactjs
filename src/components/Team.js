import React from "react";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";

function Team() {
  return (
    <div className="h-full pt-8">
      <h1 className="text-5xl font-light tracking-wider leading-tight text-center">Our Team</h1>
      <div className="h-1 w-24 bg-black mt-4 mb-8 mx-auto"></div>

      <div className="flex justify-center text-center items-center gap-20 mt-20">
        <div>
          <img alt="" src={team1} />
          <h2 className="text-xl mt-4">Elisabeth Be</h2>
          <h3 className="text-base text-gray-400 font-thin">COO</h3>
        </div>
        <div>
          <img alt="" src={team2} />
          <h2 className="text-xl mt-4">Andre Wijaya</h2>
          <h3 className="text-base text-gray-400 font-thin">CEO/CTO</h3>
        </div>
        <div>
          <img alt="" src={team3} />
          <h2 className="text-xl mt-4">Sanjaya Wahono</h2>
          <h3 className="text-base text-gray-400 font-thin">CFO</h3>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-20">
        <div className="h-3 w-3 rounded-full bg-gray-400"></div>
        <div className="h-3 w-3 rounded-full bg-gray-200"></div>
        <div className="h-3 w-3 rounded-full bg-gray-200"></div>
        <div className="h-3 w-3 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}

export default Team;
