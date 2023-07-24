"use client";
import { useState } from "react";
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

import "src/app/globals.css";

export default function HomePage() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <SidebarReact isOpen={isOpen} setIsOpen={setIsOpen} />

         <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
         <div className="duration-300 px-[10px] z-[0] bg-th-background">
            <Home />

            <About />
            <Skills />
            <Projects />
            <ContactMe />
         </div>

         <Footer />
      </div>
   );
}
