"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface Nav {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isOpen, setIsOpen }: Nav) {
   const handleOpen = () => {
      setIsOpen(true);
   };

   return (
      <div
         className="flex flex-row justify-between items-center bg-[#E1E1E1] h-[80px] px-[20px] w-full fixed
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] z-[2]"
      >
         <div className="">
            <div className="text-[28px] border-2 border-[#243c5a] bg-white rounded-full p-2 ">
               MS
            </div>
         </div>
         <nav className="phone:hidden laptop:block px-4">
            <a href="#Home" className="px-4 text-2xl">
               Home
            </a>

            <a className="px-4 text-2xl" href="#About">
               About
            </a>

            <a className="px-4 text-2xl" href="#Skills">
               Skills
            </a>

            <a className="px-4 text-2xl" href="#Projects">
               Projects
            </a>

            <a className="px-4 text-2xl" href="#ContactMe">
               ContactMe
            </a>
         </nav>

         <button className="flex flex-row laptop:hidden">
            <Bars3Icon className="h-[52px] w-[66px]" onClick={handleOpen} />
         </button>
      </div>
   );
}
