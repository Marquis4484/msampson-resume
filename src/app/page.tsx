import React from "react";
import { About, ContactMe, Home, Nav } from "@/components";

export default function HomePage() {
   return (
      <div>
         <Nav />

         <div className="pt-[80px] px-[10px]">
            <Home />
            <About />
            <ContactMe />
         </div>
      </div>
   );
}
