import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div
         id="Home"
         className="flex  pt-[80px] tablet:flex-row phone:flex-col items-center"
      >
         <div className="flex flex-col items-center phone:text-[28px] tablet:text-[36px] flex-1">
            <p className="font-light  pt-[20px]">Hello, my name is</p>
            <h1 className=" pb-[20px]">Marquis Sampson</h1>
            <hr className="phone:w-[260px] tablet:w-[350px]  border-[1.5px] border-[#000000]" />
            <span className="font-bold phone:text-[26px] tablet:text-[35px] laptop:text-[60px] py-[20px]">
               Software Developer
            </span>
            <p className=" text-center py-[5px]">Welcome to my website!</p>
         </div>
         <div className="flex flex-col items-center tablet:text-[36px] phone:text-[28px] flex-1">
            <p className=" px-[15px] py-[10px] pt-[20px] text-center">
               While reading through this webpage, please feel free to...
            </p>
            <p className=" py-[5px] px-[30px]">Hit this button!</p>
            <button className="bg-[#D9D9D9] rounded-full h-[70px] w-[70px]">
               <ArrowPathIcon className="h-[50px] w-[50px] inline-flex" />
            </button>
         </div>
      </div>
   );
}
