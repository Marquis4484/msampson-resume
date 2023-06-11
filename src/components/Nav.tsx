import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Nav() {
   return (
      <div
         className="flex flex-row justify-between items-center bg-[#E1E1E1] h-[80px] px-[20px] 
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
      >
         <div className="">
            <div className="text-[28px] border-2 border-[#243c5a] bg-white rounded-full p-2 ">
               MS
            </div>
         </div>
         <div className="flex flex-row">
            <Bars3Icon className="h-[52px] w-[66px]" />
            {/* <div>Home</div>
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div> */}
         </div>
      </div>
   );
}
