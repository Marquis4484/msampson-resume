import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
   return (
      <div className="flex flex-col justify-between items-center bg-[#000000] h-[120px]">
         <p className="text-[#ffffff] py-[10px]">Contact Links</p>
         <div className="flex flex-row m-[20px] ">
            <BsGithub className="text-[50px] mx-[12px] text-blue-600" />

            <BsLinkedin className="mx-[12px] text-[50px]  text-blue-600" />

            <FaEnvelope className="mx-[12px] text-[50px]  text-blue-600" />
         </div>
      </div>
   );
}
