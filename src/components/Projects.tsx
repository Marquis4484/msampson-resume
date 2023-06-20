import React from "react";

export default function Projects() {
   return (
      <div>
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            My Personal Software Developer Projects
         </h1>
         <div className="bg-[#D9D9D9] rounded-[50px] flex flex-col items-center h-[280px] w-[290px]">
            <h2>Title</h2>
            <div className="h-[140px] w-[200px] bg-black"></div>
            <button className="bg-[#797979] rounded-[50px] p-[8px] self-center">
               Resume!
            </button>
         </div>
      </div>
   );
}
