import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div className="flex flex-col items-center">
         <p className="font-light text-[28px] pt-[20px]">Hello, my name is</p>
         <h1 className="text-[30px] pb-[20px]">Marquis Sampson</h1>
         <hr className="w-[230px] h-[12px]  border-[#000000]" />
         <span className="font-bold text-[28px] pb-[20px]">
            Software Developer
         </span>
         <p className="text-[24px]">Welcome to my website!</p>
         <p className="text-[26px] p-[15px] text-center">
            Now, while you are exploring this website please feel free to...
         </p>
         <p className="text-[28px] py-[5px]">Hit this button!</p>
         <button className="bg-[#D9D9D9] rounded-full h-[70px] w-[70px] ">
            <ArrowPathIcon className="h-[50px] w-[50px] inline-flex" />
         </button>
      </div>
   );
}
