import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();
   const [themeIdx, setThemeIdx] = useState(0);
   // or change this in your useTheme hook

   const themes = [
      { name: "Normal" },
      { name: "Dark" },
      { name: "Forrest" },
      { name: "Pink" },
      { name: "Sky" },
      { name: "Strawberry" },
   ];

   const handleColorChange = (e: any) => {
      setTheme(themes[themeIdx].name.toLowerCase());
      setThemeIdx((themeIdx + 1) % themes.length);
      console.log(themes.length);
   };

   useEffect(() => setMounted(true), []);

   if (!mounted) return null;
   return (
      <div
         id="Home"
         className="flex  pt-[80px] tablet:flex-row phone:flex-col items-center"
      >
         <div className="flex flex-col items-center phone:text-[28px] tablet:text-[36px] laptop:text-[50px] flex-1">
            <p className="font-light text-th-text-ms  pt-[20px] laptop:py-[30px]">
               Hello, my name is
            </p>
            <h1 className="text-th-text-ms pb-[20px]">Marquis Sampson</h1>
            <hr className="phone:w-[260px]  tablet:w-[350px]  laptop:w-[450px] desktop:w-[530px] laptop:my-[30px]  border-[1.5px] border-th-text-ms" />
            <span className="text-th-text-ms font-bold phone:text-[26px] tablet:text-[35px] laptop:py-[30px] laptop:text-[52px] py-[20px]">
               Software Engineer
            </span>
            <p className="text-th-text-ms text-center py-[5px] laptop:my-[40px]">
               Welcome To My Website!
            </p>
         </div>
         <div className="flex flex-col items-center  tablet:text-[33px] phone:text-[28px] laptop:text-[45px] flex-1">
            <p className=" px-[15px]  py-[10px] phone:w-4/5 text-center laptop:py-[50px] text-th-text-ms">
               While reading through this webpage, please feel free to...
            </p>
            <p className=" py-[5px] px-[30px] text-center laptop:py-[30px] text-th-text-ms">
               Hit This Button!
            </p>
            <button
               value={theme}
               onClick={handleColorChange}
               className="bg-th-button text-th-text-ms rounded-full h-[70px] w-[70px] p-2 hover:bg-th-button-highlight"
            >
               <ArrowPathIcon />
            </button>
            <span className="p-1 sm:px-3 sm:py-2 text-th-secondary">
               Current theme: {mounted && theme}
            </span>
            {/* <select
               name="theme"
               id="theme-select"
               className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
               onChange={(e) => setTheme(e.currentTarget.value)}
               value={theme}
            >
               <option value="system">System</option>
               {themes.map((t) => (
                  <option
                     key={t.name.toLowerCase()}
                     value={t.name.toLowerCase()}
                  >
                     {t.name}
                  </option>
               ))}
            </select> */}
         </div>
      </div>
   );
}
