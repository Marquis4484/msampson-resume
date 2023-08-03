import React from "react";
import { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ChildProps {
   isOpen: boolean;

   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: ChildProps) {
   const links = [
      { href: "/", label: "Home" },
      { href: "/About", label: "About" },
      { href: "/Skills", label: "Skills" },
      { href: "/Projects", label: "Projects" },
      { href: "/ContactMe", label: "ContactMe" },
   ];

   const handleClose = () => {
      setIsOpen(false);
   };
   return (
      <div>
         <div
            className={`${isOpen ? "z-[4] opacity-100" : "z-[-4] opacity-0"} 
          h-screen bg-th-content fixed w-[190px] flex items-center justify-center  duration-300 `}
         >
            <ul className="text-2xl py-3">
               {links.map((link) => (
                  <li
                     className="text-2xl text-th-text-ms hover:text-th-button-highlight py-3"
                     key={link.href}
                  >
                     <Link
                        className="relative px-3 text-th-text-ms text-2xl hover:text-th-button-highlight"
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                     >
                        {link.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <div
            onClick={handleClose}
            className={`${
               isOpen ? "opacity-[0.4] z-[3]" : "z-[-1] opacity-0"
            } h-screen w-screen bg-[#000000] cursor-pointer fixed duration-[300ms] `}
         />
         <button
            onClick={handleClose}
            className={`${isOpen ? "opacity-100 z-[4]" : "opacity-0 z-[-1]"} 
            bg-th-background hover:text-th-button-highlight  rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-[#000000] hover:text-th-button-highlight text-th-button" />
         </button>
      </div>
   );
}
