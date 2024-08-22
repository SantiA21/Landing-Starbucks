import React from "react";
import logo from "../assets/logoHeader.png";

const Navbar = () => {
  return (
    <nav className=" h-[97px] flex justify-between items-center ">
      <div className="flex items-center cursor-pointer">
        <img className="w-[44px] h-[45px]" src={logo} alt="" />
        <p className="text-[#00623B] font-bold p-2">STARBUCKS</p>
      </div>
      <div className="">
        <ul className="flex text-[#000000] text-[18px] gap-32 font-normal">
          <li className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
            Home
          </li>
          <li className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
            Menu
          </li>
          <li className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
            Rewards
          </li>
          <li className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
            Gift Cards
          </li>
          <li className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
            Stores
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-[#00623B] text-[#FFFFFF] rounded-sm text-[18px] font-normal w-[118px] h-[45px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-73 duration-300">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
