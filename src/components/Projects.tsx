import React from "react";

export default function Projects() {
   return (
      <div className="pt-[50px] flex flex-col">
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            My Personal Software Developer Projects
         </h1>
         <div className="flex flex-col items-center">
            <div className="bg-[#D9D9D9] my-[10px] rounded-[50px] flex flex-col items-center h-[240px] w-[240px]">
               <h2 className="pt-[5px]">Title</h2>
               <div className="h-[140px] my-[10px] w-[200px] bg-black"></div>
               <button className="bg-[#797979] rounded-[50px] p-[8px] self-center">
                  Resume!
               </button>
            </div>
            <div className="bg-[#D9D9D9] my-[10px] rounded-[50px] flex flex-col items-center h-[240px] w-[240px]">
               <h2 className="pt-[5px]">Title</h2>
               <div className="h-[140px] my-[10px] w-[200px] bg-black"></div>
               <button className="bg-[#797979] rounded-[50px] p-[8px] self-center">
                  Resume!
               </button>
            </div>
            <div className="bg-[#D9D9D9] my-[10px] rounded-[50px] flex flex-col items-center h-[240px] w-[240px]">
               <h2 className="pt-[5px]">Title</h2>
               <div className="h-[140px] my-[10px] w-[200px] bg-black"></div>
               <button className="bg-[#797979] rounded-[50px] p-[8px] self-center">
                  Resume!
               </button>
            </div>
            <div className="bg-[#D9D9D9] my-[10px] rounded-[50px] flex flex-col items-center h-[240px] w-[240px]">
               <h2 className="pt-[5px]">Title</h2>
               <div className="h-[140px] my-[10px] w-[200px] bg-black"></div>
               <button className="bg-[#A5A5A5] rounded-[50px] p-[8px] self-center">
                  Resume!
               </button>
            </div>
         </div>

         <p className="p-[20px]">
            If you&apos;d like a professional list of what I can offer, please
            download my resume by clicking the resume button down below!
         </p>
         <button className="bg-[#A5A5A5] rounded-[50px] p-[8px] self-center">
            Resume!
         </button>
      </div>
   );
}
