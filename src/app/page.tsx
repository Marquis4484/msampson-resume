"use client";
import { useState, useEffect } from "react";
import {
   About,
   ContactMe,
   Home,
   Nav,
   Skills,
   Projects,
   Footer,
   SidebarReact,
} from "@/components";
import { useTheme } from "next-themes";
import "src/app/globals.css";

export default function HomePage() {
   const [isOpen, setIsOpen] = useState(false);
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   const themes = [
      { name: "Light" },
      { name: "Dark" },
      { name: "Grubox" },
      { name: "Pink" },
      { name: "Sky" },
      { name: "Strawberry" },
   ];

   useEffect(() => setMounted(true), []);

   if (!mounted) return null;

   return (
      <div>
         <SidebarReact isOpen={isOpen} setIsOpen={setIsOpen} />
         <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
         <div className=" px-[10px] z-[0] bg-th-background">
            <Home />
            <span className="p-1 sm:px-3 sm:py-2 text-th-secondary">
               Current theme: {mounted && theme}
            </span>
            <select
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
            </select>

            <About />
            <Skills />
            <Projects />
            <ContactMe />
         </div>
         <Footer />
      </div>
   );
}
