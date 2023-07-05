import React from "react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
   const projects = [
      {
         name: "Amazon Clone",
         github_link: "https://github.com/Marquis4484/amazon-clone",
         live_link: "https://www.amzn-clone.com/",
         description: "This ",
      },
      {
         name: "Job search Web App",
         github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
         live_link: "https://myjobsearch.netlify.app",
      },
      {
         name: "Highking",
         github_link: "https://github.com/Sridhar-C-25/highking",
         live_link: "https://highking01.netlify.app",
      },
      {
         name: "React Nav",
         github_link:
            "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
         live_link: "https://reacttailwindnavbar.netlify.app",
      },
      {
         name: "Vue Country",
         github_link: "https://github.com/Sridhar-C-25",
         live_link: "https://vuecountry05.netlify.app",
      },
   ];
   return (
      <div id="Projects" className="pt-[80px] flex flex-col">
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
         <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
            <div className="lg:w-2/3 w-[240px] z-[-2]">
               <Swiper
                  slidesPerView={1.2}
                  spaceBetween={20}
                  breakpoints={{
                     768: {
                        slidesPerView: 2,
                     },
                  }}
                  loop={true}
                  autoplay={{
                     delay: 3000,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
               >
                  {projects.map((project_info, i) => (
                     <SwiperSlide key={i}>
                        <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                           <h3 className="text-xl my-4">{project_info.name}</h3>
                           <div className="flex gap-3">
                              <a
                                 href={project_info.github_link}
                                 target="_blank"
                                 className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                              >
                                 Github
                              </a>
                              <a
                                 href={project_info.live_link}
                                 target="_blank"
                                 className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                              >
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="lg:block hidden"></div>
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
