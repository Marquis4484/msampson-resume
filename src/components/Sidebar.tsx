import React from "react";
import { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { XCircleIcon } from "@heroicons/react/24/solid";

interface ChildProps {
   isOpen: boolean;

   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   const handleClose = () => {
      setIsOpen(false);
   };
   return (
      <div>
         <div
            className={`${isOpen ? " opacity-100" : "opacity-0"} 
          h-screen bg-[#3d3d3d] fixed w-[190px] flex items-center justify-center z-[2] duration-300 `}
         >
            <ul>
               <li>
                  <a href="#Home">Home</a>
               </li>
               <li>
                  <a href="#About">About</a>
               </li>
               <li>
                  <a href="#Skills">Skills</a>
               </li>
               <li>
                  <a href="#Projects">Projects</a>
               </li>

               <li>
                  <a href="#ContactMe">ContactMe</a>
               </li>
            </ul>
         </div>
         <div
            onClick={handleClose}
            className={`${
               isOpen ? "opacity-[0.4] z-[1]" : "z-[-1] opacity-0"
            } h-screen w-screen bg-[#000000] fixed duration-[400ms] `}
         ></div>
         <button
            onClick={handleClose}
            className={`${isOpen ? "opacity-100 z-[2]" : "opacity-0 z-[-1]"} 
            bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
      </div>
   );
}
