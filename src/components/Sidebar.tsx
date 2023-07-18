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
            className={`${isOpen ? "z-[4] opacity-100" : "z-[-4] opacity-0"} 
          h-screen bg-[#3d3d3d] fixed w-[190px] flex items-center justify-center  duration-300 `}
         >
            <ul className="text-2xl py-3">
               <li className="text-2xl py-3">
                  <a onClick={() => setIsOpen(false)} href="#Home">
                     Home
                  </a>
               </li>
               <li className="text-2xl py-3">
                  <a onClick={() => setIsOpen(false)} href="#About">
                     About
                  </a>
               </li>
               <li className="text-2xl py-3">
                  <a onClick={() => setIsOpen(false)} href="#Skills">
                     Skills
                  </a>
               </li>
               <li className="text-2xl py-3">
                  <a onClick={() => setIsOpen(false)} href="#Projects">
                     Projects
                  </a>
               </li>

               <li className="text-2xl py-3">
                  <a onClick={() => setIsOpen(false)} href="#ContactMe">
                     ContactMe
                  </a>
               </li>
            </ul>
         </div>
         <div
            onClick={handleClose}
            className={`${
               isOpen ? "opacity-[0.4] z-[3]" : "z-[-1] opacity-0"
            } h-screen w-screen bg-[#000000] cursor-pointer fixed duration-[400ms] `}
         />
         <button
            onClick={handleClose}
            className={`${isOpen ? "opacity-100 z-[4]" : "opacity-0 z-[-1]"} 
            bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
      </div>
   );
}
