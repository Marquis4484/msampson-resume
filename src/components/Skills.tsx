import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Skills() {
   return (
      <div className="pt-[20px] flex flex-col">
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            The Skills That I Can Offer
         </h1>
         <p className="px-[20px]">
            Here is a list of coding langauges, frameworks and libraries that
            I&apos;ve worked with. Take a look!
         </p>
         <FaBeer className="h-6 w-6 text-blue-600" />
         <IoLogoJavascript />
         <p className="px-[20px]">
            If you&apos;d like a professional list of what I can offer, please
            download my resume by clicking the resume button down below!
         </p>

         <button className="bg-[#D9D9D9] rounded-[50px] p-[8px] self-center">
            Resume!
         </button>
      </div>
   );
}
