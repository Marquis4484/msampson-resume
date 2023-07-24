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
         className="duration-300 flex flex-row justify-between items-center bg-th-nav-link h-[80px] px-[20px] w-full fixed
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] z-[2]"
      >
         <div className="">
            <div className="text-[28px] border-2 border-th-text-ms bg-white text-black rounded-full p-2 ">
               MS
            </div>
         </div>
         <nav className="phone:hidden laptop:block px-4">
            <a
               href="#Home"
               className="px-4 text-th-text-ms text-2xl hover:text-th-button-highlight"
            >
               Home
            </a>

            <a
               className="px-4 text-th-text-ms text-2xl hover:text-th-button-highlight"
               href="#About"
            >
               About
            </a>

            <a
               className="px-4 text-th-text-ms text-2xl hover:text-th-button-highlight"
               href="#Skills"
            >
               Skills
            </a>

            <a
               className="px-4 text-th-text-ms text-2xl hover:text-th-button-highlight"
               href="#Projects"
            >
               Projects
            </a>

            <a
               className="px-4 text-th-text-ms hover:text-th-button-highlight text-2xl"
               href="#ContactMe"
            >
               ContactMe
            </a>
         </nav>

         <button className="flex flex-row laptop:hidden">
            <Bars3Icon
               className="text-th-text-ms h-[52px] w-[66px]"
               onClick={handleOpen}
            />
         </button>
      </div>
   );
}
