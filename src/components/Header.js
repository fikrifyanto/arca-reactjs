import React from "react";
import { Link, useLocation } from "react-router-dom";

let menus = [
  { title: "Home", path: "/" },
  { title: "Work", path: "/work" },
  { title: "Service", path: "/service" },
  { title: "Our Customer", path: "/customer" },
  { title: "Team", path: "/team" },
  { title: "Contact", path: "/contact" },
];

function Header() {
  const location = useLocation();

  return (
    <div className="flex items-center px-24 justify-between w-full h-[12vh] bg-white drop-shadow-blur">
      <h1 className="uppercase text-xl">
        <span className="font-medium">Our</span> <span className="font-bold text-[#D1E45A]">Home</span>
      </h1>
      <div className="flex gap-10 text-sm">
        {menus.map((menu, key) => (
          <div key={key} className="flex flex-col">
            <Link to={menu.path}>{menu.title}</Link>
            {menu.path === location.pathname ? <div className="h-0.5 w-8 bg-black mt-2"></div> : <div></div>}
          </div>
        ))}
      </div>
      <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.5 17.5L13.875 13.875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
