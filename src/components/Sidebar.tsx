import React from "react";

interface ChildProps {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   return (
      <div className={"Menu " + (isOpen && "active")}>
         <ul>
            <li onClick={() => setIsOpen(false)}>
               <a href="#Intro">Home</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
               <a href="#AboutMe">About Me</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
               <a href="#Skills">Skills</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
               <a href="#Projects">Projects</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
               <a href="#Interests">Interests</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
               <a href="#Contact">Contact</a>
            </li>
         </ul>
      </div>
   );
}
