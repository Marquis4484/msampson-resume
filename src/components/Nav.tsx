"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface Nav {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isOpen, setIsOpen }: Nav) {
   const toggle = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
   };
   return (
      <div
         className="flex flex-row justify-between items-center bg-[#E1E1E1] h-[80px] px-[20px] w-full fixed
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
      >
         <div className="">
            <div className="text-[28px] border-2 border-[#243c5a] bg-white rounded-full p-2 ">
               MS
            </div>
         </div>

         <button className="flex flex-row">
            <Bars3Icon className="h-[52px] w-[66px]" onClick={toggle} />
            {/* <div>Home</div>
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div> */}
         </button>
      </div>
   );
}
