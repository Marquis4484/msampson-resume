import React from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
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
