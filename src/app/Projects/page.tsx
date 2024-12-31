"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import project1 from "public/assets/HomeAway.png";
import project2 from "public/assets/Tealaxation.png";
import project3 from "public/assets/spaces.png";
import project4 from "public/assets/amzn-clone.png";
import project5 from "public/assets/GrandBuffet-ReadMe.png";
import project6 from "public/assets/musicplayer.png";
import project7 from "public/assets/comingsoon.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Projects() {
  const [projectOpen, setProjectOpen] = useState(false);

  const projects = [
    {
      img: project1,
      name: "HomeAway",
      github_link: "https://github.com/Marquis4484/homeaway-supabase",
      live_link:
        "https://homeaway-supabase-ekg5882t3-marquis4484s-projects.vercel.app/",
      description:
        "This website was created  by utilizing Shadcn/ui to shape the frontend interface, Clerk to handle user authentication, and Supabase to store data and images to resemble the popular online marketplace founded in 2008, Airbnb. I implemented Stripe's CLI program with over 100 lines of code to add checkout sessions to the website. I also composed the overall layout and mobile responsiveness of the web application using Tailwind CSS.",
    },
    {
      img: project2,
      name: "Tealaxation",
      github_link: "https://github.com/Marquis4484/tealaxation",
      live_link: "https://tealaxation.netlify.app/",
      description:
        "I adapted a mockup from Figma into a fully responsive website with over 1,000 lines of code that focuses on shipping premium tea at an affordable price. Within a few weeks, I developed the functionality of the modern website using vanilla JavaScript and ES6 modules. I also constructed a REST API hosted on GitHub Pages that contains all of the products for the online store. ",
    },

    {
      img: project3,
      name: "Spaces",
      github_link: "https://github.com/Marquis4484/spaces-live-chat-app",
      live_link: "https://ms-spaces.com",
      description:
        "A real-time messaging application that utilizes WebSockets to allow for bi-directional communication between online users within a specific chat room created by the users themselves. Users will be asked to either log-in or create an account before using the application. After the right credentials are inputted and verified through Firebase, the user will be asked to input a room name. If two users input the same room name, users who are inside that same room will be able to converse with each other. Socket.io alongside Node.js, is what powers that backend by emitting events that allow each user connected to the server to communicate with each other. I created this app to understand more about online communication and WebSockets.",
    },
    {
      img: project4,
      name: "Amazon Clone",
      github_link: "https://github.com/Marquis4484/amazon-clone",
      live_link: "https://amazon-clone-marquis4484.vercel.app/",
      description:
        "Amazon Clone was created within the React framework Nextjs. It includes a list of items generated by the Fake Store API while the responsive layout was developed in Tailwind CSS. Items can be added to a checkout session thanks to Redux state management. Authentication is handled by the library NextAuth and allows users to log in using either their Google account or their GitHub account. Users can also purchase the items in their basket using Stripe's checkout feature. However, since this is a demo, no actual money transactions will be deducted from a real bank. This full-stack application also utilizes webhooks to update the user's checkout information and store the information about the items purchased within the backend cloud storage platform Firebase.",
    },
    {
      img: project5,
      name: "GrandBuffet",
      github_link: "https://github.com/Marquis4484/grandbuffet",
      live_link: "https://ms-grandbuffet.com",
      description:
        "This is a mock restaurant website based on many modern websites that exist on the internet today. I created the design of the website's logo in Adobe Illustrator and designed the website itself in Adobe XD. It runs as a single-page application without any JavaScript frameworks such as React.js or Vue.js. This website also functions as a native web application with Node.js and Express being utilized within the backend to assist with client-side routing. All of the views in the frontend folder display content using class-based functions. Content within those files is distributed throughout the app using ES6 JavaScript. The views change depending on which page the user visits. Also, everything is rendered using a singular HTML Page.",
    },
    {
      img: project6,
      name: "MusicPlayer",
      github_link: "https://github.com/Marquis4484/musicplayer",
      live_link: "https://ms-musicplayer.netlify.app/",
      description:
        "This is a small music player project created using JavaScript, HTML, and CSS files. The various features of the music player are controlled by functions within the musicplayer.js file. The song files are stock audio from Adobe's stock audio website. The icons used in this project are imported from Font Awesome's website. My objective for this website was to understand how to play audio through a web application hosted on the internet. I also listen to music daily so I thought it would be fun to incorporate activities that I do in my daily life into my work. One of my hobbies is music creation and programming is another way that I can have fun showcasing it. It was a pleasure to work on this and I'd like to learn how to be more creative with JavaScript in the future.",
    },
    {
      img: project7,
      name: "Coming Soon!",
      github_link: "https://github.com/Marquis4484",
      live_link: "",
      description:
        "I am planning on creating more projects within the year. To check for any updates, please click on the GitHub button below. Thank you for your patience!",
    },
  ];
  return (
    <div className="pt-[80px] phone:h-fit laptop:h-screen duration-300 bg-th-background flex flex-col">
      <h1 className="text-[50px]  text-center p-[20px] text-th-text-ms font-black ">
        My Personal Software Projects
      </h1>
      <div className="flex phone:flex-col tablet:pt-5 tablet:flex-row justify-evenly">
        <p className="text-center text-[20px]  rounded-xl bg-th-content text-th-text-ms tablet:p-6 phone:my-8 phone:p-6 tablet:self-start phone:w-[200px] phone:self-center laptop:self-center tablet:w-[400px] laptop:w-[400px]">
          These are the most recent software development projects that I have
          been working on. Each project is hosted on the internet so that anyone
          can easily view them on their own device. Also, if you would like to
          view the code for a specific project, there is a link to a github page
          for each website. Please, take a look!
        </p>

        <div className="cursor-pointer phone:w-[230px] tablet:w-[350px] laptop:w-[700px] phone:self-center ">
          <Swiper
            slidesPerView={1}
            spaceBetween={120}
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
                <div className="flex flex-col tablet:w-[250px] tablet:h-fit  phone:w-[230px] laptop:w-[700px] p-6 bg-th-content text-th-text-ms rounded-[50px]">
                  <h3 className="text-[25px]  text-center">
                    {project_info.name}
                  </h3>
                  <Image
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg w-[250px] h-[155px] border-4 border-black my-5 self-center"
                  />
                  <p className="text-[15px]">{project_info.description}</p>
                  <div className="flex justify-around py-4 gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-th-text-ms bg-th-button hover:bg-th-button-highlight px-1 py-1 inline-block  duration-200 active:text-th-button-highlight rounded-[50px]"
                    >
                      GitHub
                    </a>
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="text-th-text-ms bg-th-button hover:bg-th-button-highlight px-1 py-1 inline-block  duration-200 active:text-th-button-highlight rounded-[50px]"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
