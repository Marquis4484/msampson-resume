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
      console.log(isOpen);
   };
   return (
      <div className={"" + (isOpen ? "block" : "hidden")}>
         <div className="w-[190px] h-screen bg-[#3d3d3d] fixed flex items-center justify-center z-[2]">
            <ul>
               <li>
                  <a href="#Intro">Home</a>
               </li>
               <li>
                  <a href="#AboutMe">About Me</a>
               </li>
               <li>
                  <a href="#Skills">Skills</a>
               </li>
               <li>
                  <a href="#Projects">Projects</a>
               </li>
               <li>
                  <a href="#Interests">Interests</a>
               </li>
               <li>
                  <a href="#Contact">Contact</a>
               </li>
            </ul>
         </div>
         <div className="h-screen w-screen bg-[#000000] opacity-[0.4] fixed z-[1]" />
         <button
            onClick={handleClose}
            className="bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] z-[2]  "
         >
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
      </div>
   );
}
