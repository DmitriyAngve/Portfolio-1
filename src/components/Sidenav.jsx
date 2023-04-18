import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={40}
        onClick={handleNav}
        className="fixed top-4 right-4 z-50 md:hidden fill-amber-500"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 bg-gradient-to-r from-sky-100 to-amber-100">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg"
          >
            <AiOutlineHome size={40} className="fill-amber-500/70" />
            <span className="pl-4 text-2xl font-bold text-[#273558]">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg"
          >
            <MdWorkOutline size={40} className="fill-amber-500/70" />
            <span className="pl-4 text-2xl font-bold text-[#273558]">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg"
          >
            <AiOutlineProject size={40} className="fill-amber-500/70" />
            <span className="pl-4 text-2xl font-bold text-[#273558]">
              Projects
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg"
          >
            <BsPerson size={40} className="fill-amber-500/70" />
            <span className="pl-4 text-2xl font-bold text-[#273558]">
              Resume
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg"
          >
            <AiOutlineMail size={40} className="fill-amber-500/70" />
            <span className="pl-4 text-2xl font-bold text-[#273558]">
              Contact
            </span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full bg-gray-100/70 shadow-amber-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-right"
          >
            <AiOutlineHome size={25} className="fill-[#273558]" />
          </a>
          <a
            href="#work"
            className="rounded-full bg-gray-100/70 shadow-amber-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-right"
          >
            <MdWorkOutline size={25} className="fill-[#273558]" />
          </a>
          <a
            href="#projects"
            className="rounded-full bg-gray-100/70 shadow-amber-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-right"
          >
            <AiOutlineProject size={25} className="fill-[#273558]" />
          </a>
          <a
            href="#resume"
            className="rounded-full bg-gray-100/70 shadow-amber-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-right"
          >
            <BsPerson size={25} className="fill-[#273558]" />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gray-100/70 shadow-amber-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-right"
          >
            <AiOutlineMail size={25} className="fill-[#273558]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
