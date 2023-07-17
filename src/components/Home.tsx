import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div
         id="Home"
         className="flex  pt-[80px] tablet:flex-row phone:flex-col items-center"
      >
         <div className="flex flex-col items-center phone:text-[28px] tablet:text-[36px] laptop:text-[50px] flex-1">
            <p className="font-light  pt-[20px] laptop:py-[30px]">
               Hello, my name is
            </p>
            <h1 className=" pb-[20px]">Marquis Sampson</h1>
            <hr className="phone:w-[260px] tablet:w-[350px]  laptop:w-[450px] laptop:my-[50px]  border-[1.5px] border-[#000000]" />
            <span className="font-bold phone:text-[26px] tablet:text-[35px] laptop:py-[30px] laptop:text-[52px] py-[20px]">
               Software Engineer
            </span>
            <p className=" text-center py-[5px]">Welcome To My Website!</p>
         </div>
         <div className="flex flex-col items-center  tablet:text-[33px] phone:text-[28px] laptop:text-[45px] flex-1">
            <p className=" px-[15px]  py-[10px] phone:w-4/5 text-center laptop:py-[50px]">
               While reading through this webpage, please feel free to...
            </p>
            <p className=" py-[5px] px-[30px] text-center">Hit This Button!</p>
            <button className="bg-[#D9D9D9] rounded-full h-[70px] w-[70px] p-2">
               <ArrowPathIcon />
            </button>
         </div>
      </div>
   );
}
