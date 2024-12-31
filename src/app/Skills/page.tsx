"use client";
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
    <div
      id="Skills"
      className="pt-[80px] duration-300 bg-th-background phone:h-fit  flex flex-col"
    >
      <h1 className=" text-th-text-ms text-[50px]  text-bold text-center p-[20px]  font-black">
        The Skills That I Can Offer
      </h1>
      <p className="px-[20px] text-[20px] bg-th-content rounded-[50px] text-center py-4 w-4/5 text-th-text-ms self-center">
        Here is a list of coding langauges, frameworks and libraries that
        I&apos;ve been using since I decided to study software development.
      </p>
      <div className="flex flex-wrap bg-th-content  rounded-[50px] my-8 py-8 items-center justify-center self-center tablet:w-2/5 phone:w-3/5">
        <div className="mx-[12px] flex flex-col items-center">
          <FaReact className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">React</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiRedux className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">Redux</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <BsFiletypeScss className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">SCSS Files</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiTailwindcss className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">TailwindCSS</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <IoLogoJavascript className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Javascript</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiJavascript className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Express</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <DiSass className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Sass</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <DiCss3 className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">CSS</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <BsGit className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Git</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <IoLogoNodejs className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Node.js</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiFirebase className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Firebase</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiRubyonrails className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Ruby on Rails</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <DiSwift className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">Swift</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiVisualstudio className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">VS Code</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiTypescript className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">Typescript</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiGraphql className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">GraphQL</p>
        </div>
        <div className="m-[12px] flex flex-col items-center">
          <SiHtml5 className="text-[50px]  text-th-background" />
          <p className="text-th-text-ms">HTML</p>
        </div>
        <div className="flex flex-col items-center mx-[20px]">
          <TbBrandNextjs className="text-[50px] text-th-background" />
          <p className="text-th-text-ms">Next.js</p>
        </div>
      </div>
    </div>
  );
}
