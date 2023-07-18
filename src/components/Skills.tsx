import React from "react";
import { FaReact } from "react-icons/fa";
import {
   SiRedux,
   SiTailwindcss,
   SiJavascript,
   SiRubyonrails,
   SiFirebase,
   SiVisualstudio,
   SiTypescript,
   SiGraphql,
   SiHtml5,
   SiCplusplus,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { BsFiletypeScss, BsGit } from "react-icons/bs";
import { DiCss3, DiSass, DiSwift, DiJava } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
   return (
      <div id="Skills" className="pt-[80px] flex flex-col">
         <h1 className="text-[30px] text-bold text-center pb-[10px] font-semibold">
            The Skills That I Can Offer
         </h1>
         <p className="px-[20px] text-[20px] text-center py-4 w-4/5 self-center">
            Here is a list of coding langauges, frameworks and libraries that
            I&apos;ve been using since I decided to study software development.
         </p>
         <div className="flex flex-wrap bg-[#A5A5A5] rounded-[50px] my-8 py-8 items-center justify-center self-center tablet:w-2/5">
            <div className="mx-[12px] flex flex-col items-center">
               <FaReact className="text-[50px]  text-blue-600" />
               <p>React</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiRedux className="text-[50px]  text-blue-600" />
               <p>Redux</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <BsFiletypeScss className="text-[50px]  text-blue-600" />
               <p>Scss</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiTailwindcss className="text-[50px] text-blue-600" />
               <p>Tailwindcss</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <IoLogoJavascript className="text-[50px]  text-blue-600" />
               <p>Javascript</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiJavascript className="text-[50px] text-blue-600" />
               <p>Express</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <DiSass className="text-[50px] text-blue-600" />
               <p>Sass</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <DiCss3 className="text-[50px] text-blue-600" />
               <p>CSS</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <BsGit className="text-[50px] text-blue-600" />
               <p>Git</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <IoLogoNodejs className="text-[50px] text-blue-600" />
               <p>Node.js</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiFirebase className="text-[50px] text-blue-600" />
               <p>Firebase</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiRubyonrails className="text-[50px] text-blue-600" />
               <p>Ruby on Rails</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <DiSwift className="text-[50px]  text-blue-600" />
               <p>Swift</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiVisualstudio className="text-[50px]  text-blue-600" />
               <p>VS Code</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiTypescript className="text-[50px]  text-blue-600" />
               <p>Typescript</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiGraphql className="text-[50px] text-blue-600" />
               <p>GraphQL</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <DiJava className="text-[50px] text-blue-600" />
               <p>Java</p>
            </div>
            <div className="m-[12px] flex flex-col items-center">
               <SiHtml5 className="text-[50px]  text-blue-600" />
               <p>HTML</p>
            </div>
            <div className="flex flex-col items-center mx-[20px]">
               <TbBrandNextjs className="text-[50px] text-blue-600" />
               <p>Next.js</p>
            </div>
            <div className="flex flex-col items-center mx-[20px]">
               <SiCplusplus className="text-[50px] text-blue-600" />
               <p>C++</p>
            </div>
         </div>
      </div>
   );
}
