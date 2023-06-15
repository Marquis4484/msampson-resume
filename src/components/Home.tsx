import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div className="flex flex-col items-center">
         <p className="font-light text-[28px] pt-[20px]">Hello,my name is</p>
         <h1 className="text-[30px] pb-[20px]">Marquis Sampson</h1>
         <hr className="w-[230px] h-[12px]  border-[#000000]" />
         <span className="font-bold text-[30px] pb-[20px]">
            Software Developer
         </span>
         <p className="text-[26px]">Welcome to my website!</p>
         <p className="text-[30px] py-[20px]">
            Now, while you are exploring this website please
         </p>
         <p className="text-[30px] py-[20px]">set the sutff mood</p>
         <button>
            <ArrowPathIcon className="h-[52px] w-[66px]" />
         </button>
      </div>
   );
}
