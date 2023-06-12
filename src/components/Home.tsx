import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div className="flex flex-col items-center mt-[60px]">
         <h1 className="text-[30px] py-[20px]">Hello,my name is</h1>
         <span className="text-[30px] py-[20px]">Marquis Sampson</span>
         <div className="border-t-[3px]"></div>
         <span className="font-bold">Software Developer</span>
         <p className="text-[30px] py-[20px]">Welcome to my website</p>
         <p className="text-[30px] py-[20px]">
            While are exploring this wepage please...
         </p>
         <p className="text-[30px] py-[20px]">Feel free to</p>
         <p className="text-[30px] py-[20px]">set the mood</p>
         <button>
            <ArrowPathIcon className="h-[52px] w-[66px]" />
         </button>
      </div>
   );
}
