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
         <div className="flex flex-wrap">
            <div className="mx-[20px]">
               <FaReact className="text-[50px] text-center text-blue-600" />
               <p>React</p>
            </div>
            <div className="mx-[20px]">
               <SiRedux className="text-[50px] text-center text-blue-600" />
               <p>Redux</p>
            </div>
            <div className="mx-[20px]">
               <BsFiletypeScss className="text-[50px] text-center text-blue-600" />
               <p>Scss</p>
            </div>
            <div className="mx-[20px]">
               <SiTailwindcss className="text-[50px] text-blue-600" />
               <p>Tailwindcss</p>
            </div>
            <div className="mx-[20px]">
               <IoLogoJavascript className="text-[50px] text-center text-blue-600" />
               <p>Javascript</p>
            </div>
            <div className="mx-[20px]">
               <SiJavascript className="text-[50px] text-blue-600" />
               <p>Express</p>
            </div>
            <div className="mx-[20px]">
               <DiSass className="text-[50px] text-blue-600" />
               <p>Sass</p>
            </div>
            <div className="mx-[20px]">
               <DiCss3 className="text-[50px] text-blue-600" />
               <p>CSS</p>
            </div>
            <div className="mx-[20px]">
               <BsGit className="text-[50px] text-blue-600" />
               <p>Git</p>
            </div>
            <div className="mx-[20px]">
               <IoLogoNodejs className="text-[50px] text-blue-600" />
               <p>Node.js</p>
            </div>
            <div className="mx-[20px]">
               <SiFirebase className="text-[50px] text-blue-600" />
               <p>Firebase</p>
            </div>
            <div className="mx-[20px]">
               <SiRuby className="text-[50px] text-blue-600" />
               <p>Ruby</p>
            </div>
            <div className="mx-[20px]">
               <DiSwift className="text-[50px]  text-blue-600" />
               <p>Swift</p>
            </div>
            <div className="mx-[20px]">
               <SiVisualstudio className="text-[50px]  text-blue-600" />
               <p>VS Code</p>
            </div>
            <div className="mx-[20px]">
               <SiTypescript className="text-[50px]  text-blue-600" />
               <p>Typescript</p>
            </div>
            <div className="mx-[20px]">
               <SiGraphql className="text-[50px] text-blue-600" />
               <p>GraphQL</p>
            </div>
            <div className="mx-[20px]">
               <DiJava className="text-[50px] text-blue-600" />
               <p>Java</p>
            </div>
            <div className="mx-[20px]">
               <SiHtml5 className="text-[50px]  text-blue-600" />
               <p>HTML</p>
            </div>
            <div className="mx-[20px]">
               <TbBrandNextjs className="text-[50px] text-blue-600" />
               <p>Next.js</p>
            </div>

            <p className=" mx-[20px] text-[50px]">C</p>
            <p className="mx-[20px] text-[50px]">C</p>
            <p>++</p>
         </div>

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
