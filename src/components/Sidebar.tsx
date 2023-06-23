import React from "react";

interface ChildProps {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   return (
      <div>
         <div className="w-[250px] h-screen bg-[#049572] fixed flex items-center justify-center z-[2]">
            <ul>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#Intro">Home</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#AboutMe">About </a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#Skills">Skills</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#Projects">Projects</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#Contact">Contact Me</a>
               </li>
            </ul>
         </div>
         <div className="bg-[#000000] opacity-[0.5] h-[100%] z-[1]"></div>
      </div>
   );
}
