import React from "react";
import { CgProfile } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import { FiAlignJustify } from "react-icons/fi";
export default function Navbar() {
  return (
    <nav className="p-3  max-h-24 flex justify-between bg-white-400 items-center shadow-xl shadow-gray-200 ">
      <a href="#" className=" flex gap-3 p-2 text-lg items-center">
        <FcHome className="text-2xl" />
        <span className="font-bold ">Home Stay</span>
      </a>
      <div className="flex gap-5 items-center text-center max-w-full">
        <a>Stays</a>
        <a className="text-gray-500 hover:text-black">Experiences</a>
        <a className="text-2xl hidden lg:block">
          <CgProfile />
        </a>
      </div>
      <div className="flex gap-3 p-1 items-center hover:bg-gray-300 md:hidden shadow-sm rounded-sm shadow-black">
        <button className="text-xl">
          <FiAlignJustify />
        </button>
        <a className="text-2xl ">
          <CgProfile />
        </a>
      </div>
    </nav>
  );
}
