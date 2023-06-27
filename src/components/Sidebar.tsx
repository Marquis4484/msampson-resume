import React from "react";
import { useEffect, useState } from "react";

interface ChildProps {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   return (
      <>
         <div className="w-[250px] h-screen bg-[#049572] fixed flex items-center justify-center z-[2]">
            <ul>
               <a href="#AboutMe">About </a>

               <a href="#Skills">Skills</a>
               <a href="#Projects">Projects</a>

               <a href="#Contact">Contact Me</a>
            </ul>
         </div>

         <div className="h-screen w-screen bg-[#000000] opacity-[0.4] fixed z-[1]" />
      </>
   );
}
