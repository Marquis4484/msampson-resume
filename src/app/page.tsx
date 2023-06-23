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
   Sidebar,
} from "@/components";

export default function HomePage() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

         <div className="pt-[80px] px-[10px] z-[0]">
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
