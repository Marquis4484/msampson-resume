import React from "react";
import { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { XCircleIcon } from "@heroicons/react/24/solid";

interface ChildProps {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   return (
      <>
         <div className="w-[200px] h-screen bg-[#049572] fixed flex items-center justify-center z-[2]">
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
         <button className="bg-[#A5A5A5] rounded-full h-[55px] w-[55px] fixed">
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
      </>
   );
}
