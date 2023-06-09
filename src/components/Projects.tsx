import React, { useRef, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import project1 from "public/assets/amzn-clone.png";
import project2 from "public/assets/spaces.png";
import project3 from "public/assets/GrandBuffet-ReadMe.png";
import project4 from "public/assets/musicplayer.png";
import project5 from "public/assets/ms-blog-posts.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function Projects() {
   const [projectOpen, setProjectOpen] = useState(false);

   const handleOpen = () => {
      setProjectOpen(true);
   };

   const handleClose = () => {
      setProjectOpen(false);
   };

   const projects = [
      {
         img: project1,
         name: "Amazon Clone",
         github_link: "https://github.com/Marquis4484/amazon-clone",
         live_link: "https://www.amzn-clone.com/",
         description:
            "This application was created with the most popular React framework Nextjs. It includes a list of items generated by a Fake Store API and displayed with a responsive layout thanks to Tailwind CSS. Items can be added to the basket thanks Redux managing the state within the project itself. Authentication is handled by library NextAuth and allows users to login using either their Google account or their GitHub account. Users can also purchase the items in their basket using Stripe's checkout feature. However, since this is a demo, no actual money transactions will occur. This full-stack application also utilizes webhooks to update user's checkout information and store the information about the items purchased from the firebase cloudstorage. ",
      },
      {
         img: project2,
         name: "Spaces",
         github_link: "https://github.com/Marquis4484/spaces-live-chat-app",
         live_link: "https://ms-spaces.com",
         description:
            "A real-time messaging application that utilizes WebSockets to allow bi-directional communication between users. Users will be asked to either log-in or to create an account. After they do, they will be able to talk with other users who are online in the same room. Socket.io emits events that allows each user connected to the server to communicate with each other. I created this app to build an understanding with WebSockets.",
      },
      {
         img: project3,
         name: "GrandBuffet",
         github_link: "https://github.com/Sridhar-C-25/highking",
         live_link: "https://highking01.netlify.app",
         description:
            "This is a mock restaurant website based on many modern websites that exist on the internet today. I created the design of the website's logo in Adobe Illustrator and designed the website itself in Adobe XD. It runs as a single page application without any JavaScript frameworks such as React.js or Vue.js. This website also functions as a native web application due to Node.js and Express handling all of the client side routing. All of the views that are contained in the frontend folder displays content using class based functions. Content within those files are distributed throughout VS code using JavaScript modules.",
      },
      {
         img: project4,
         name: "MusicPlayer",
         github_link: "https://github.com/Marquis4484/musicplayer",
         live_link: "https://ms-musicplayer.com",
         description:
            "This is a small music player project created using JavaScript, HTML and CSS files. The various features on the music player are controlled by functions within the musicplayer.js file. The song files were retrieved from https://stock.adobe.com/audio. The icons used in this project are from Font Awesome's website.",
      },
      {
         img: project5,
         name: "Blog Website",
         github_link: "https://github.com/Sridhar-C-25",
         live_link: "https://vuecountry05.netlify.app",
      },
   ];
   return (
      <div id="Projects" className="pt-[80px] flex flex-col">
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            My Personal Software Developer Projects
         </h1>
         <p className="text-center">
            These are the most recent software development projects that I have
            been experimenting with. Please, take a look!
         </p>
         <div>
            <div
               className={`${
                  projectOpen ? "z-[4] opacity-100 " : " z-[-2] opacity-0  "
               } " bg-[#D9D9D9] fixed py-[20px] px-[30px] rounded-[50px] text-center left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[60%] h-[60%] duration-300 "`}
            >
               <h1>Your Message is Appreciated!</h1>

               <p>
                  It may take a while to respond to your message. Nevertheless,
                  I will respond to your message as soon as possible!
               </p>
               {projects.map((project_info, i) => (
                  <a
                     key={i}
                     href={project_info.live_link}
                     target="_blank"
                     className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                     Live Demo
                  </a>
               ))}
            </div>
            <div
               onClick={handleClose}
               className={`${
                  projectOpen
                     ? "opacity-[0.4] z-[1] top-0 right-0 left-0 bottom-0 h-[100%]"
                     : "z-[-1] opacity-0"
               } h-screen w-screen bg-[#000000] fixed duration-[400ms] `}
            />

            <button
               onClick={handleClose}
               className={`${
                  projectOpen ? "opacity-100 z-[2]" : "opacity-0 z-[-1]"
               } 
            bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
            >
               <XCircleIcon className="text-[50px] text-[#000000]" />
            </button>
         </div>
         <div className="flex flex-col items-center"></div>
         <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
            <div className="lg:w-2/3 w-[200px] z-[1]">
               <Swiper
                  slidesPerView={1}
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
                        <div className="h-fit w-full p-4 bg-slate-700 rounded-[50px]">
                           <h3 className="text-xl my-4">{project_info.name}</h3>
                           <Image
                              src={project_info.img}
                              alt={project_info.name}
                              className="rounded-lg"
                           />
                           <p>{project_info.description}</p>
                           <div className="flex gap-3">
                              <a
                                 href={project_info.github_link}
                                 target="_blank"
                                 className="text-cyan-600 bg-gray-800 px-1 py-1 inline-block"
                              >
                                 Github
                              </a>
                              <a
                                 href={project_info.live_link}
                                 target="_blank"
                                 className="text-cyan-600 bg-gray-800 px-1 py-1 inline-block"
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
