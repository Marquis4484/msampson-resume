import React from "react";
import { FaReact } from "react-icons/fa";
import {
   SiRedux,
   SiTailwindcss,
   SiJavascript,
   SiRuby,
   SiFirebase,
   SiVisualstudio,
   SiTypescript,
   SiGraphql,
   SiHtml5,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { BsFiletypeScss, BsGit } from "react-icons/bs";
import { DiCss3, DiSass, DiSwift, DiJava } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
   return (
      <div className="pt-[20px] flex flex-col">
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            The Skills That I Can Offer
         </h1>
         <p className="px-[20px]">
            Here is a list of coding langauges, frameworks and libraries that
            I&apos;ve worked with so far. Take a look!
         </p>
         <FaReact className="h-6 w-6 text-blue-600" />
         <SiRedux className="h-6 w-6 text-blue-600" />
         <BsFiletypeScss className="h-6 w-6 text-blue-600" />
         <SiTailwindcss className="h-6 w-6 text-blue-600" />
         <IoLogoJavascript className="h-6 w-6 text-blue-600" />
         <SiJavascript className="h-6 w-6 text-blue-600" />
         <DiSass className="h-6 w-6 text-blue-600" />
         <DiCss3 className="h-6 w-6 text-blue-600" />
         <BsGit className="h-6 w-6 text-blue-600" />
         <IoLogoNodejs className="h-6 w-6 text-blue-600" />
         <SiFirebase className="h-6 w-6 text-blue-600" />
         <SiRuby className="h-6 w-6 text-blue-600" />
         <DiSwift className="h-6 w-6 text-blue-600" />
         <SiVisualstudio className="h-6 w-6 text-blue-600" />
         <SiTypescript className="h-6 w-6 text-blue-600" />
         <SiGraphql className="h-6 w-6 text-blue-600" />
         <DiJava className="h-6 w-6 text-blue-600" />
         <SiHtml5 className="h-6 w-6 text-blue-600" />
         <TbBrandNextjs className="h-6 w-6 text-blue-600" />
         <p>C</p>
         <p>C++</p>

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
