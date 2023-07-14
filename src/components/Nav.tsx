"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface Nav {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isOpen, setIsOpen }: Nav) {
   const [activeSection, setActiveSection] = useState(null);
   const sections = useRef([]);

   const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = null;

      sections.current.forEach((section) => {
         const sectionOffsetTop = (section as any).offsetTop;
         const sectionHeight = (section as any).offsetHeight;

         if (
            pageYOffset >= sectionOffsetTop &&
            pageYOffset < sectionOffsetTop + sectionHeight
         ) {
            newActiveSection = (section as any).id;
         }
      });

      setActiveSection(newActiveSection);
   };

   useEffect(() => {
      (sections as any).current = document.querySelectorAll("[data-section]");
      window.addEventListener("scroll", handleScroll);
      console.log(sections);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const activeStyle = {
      fontWeight: "bold",
      color: "red",
      textDecoration: "underline",
   };

   const handleOpen = () => {
      setIsOpen(true);
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
         <nav className="phone:hidden laptop:block px-4">
            <a
               href="#section1"
               style={activeSection === "section1" ? activeStyle : {}}
               className="px-4 text-xl"
            >
               Home
            </a>

            <a
               className="px-4 text-xl"
               style={
                  activeSection === "section2" ? activeStyle : { color: "blue" }
               }
               href="#section2"
            >
               About
            </a>

            <a
               className="px-4 text-xl"
               style={
                  activeSection === "section3" ? activeStyle : { color: "blue" }
               }
               href="#section3"
            >
               Skills
            </a>

            <a
               className="px-4 text-xl"
               style={
                  activeSection === "section4" ? activeStyle : { color: "blue" }
               }
               href="#section4"
            >
               Projects
            </a>

            <a
               className="px-4 text-xl"
               style={
                  activeSection === "section5" ? activeStyle : { color: "blue" }
               }
               href="#section5"
            >
               ContactMe
            </a>
         </nav>

         <button className="flex flex-row laptop:hidden">
            <Bars3Icon className="h-[52px] w-[66px]" onClick={handleOpen} />
         </button>
      </div>
   );
}
