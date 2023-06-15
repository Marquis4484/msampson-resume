import React from "react";
import { About, ContactMe, Home, Nav } from "@/components";

export default function HomePage() {
   return (
      <div>
         <Nav />

         <div className="pt-[80px]">
            <Home />
            <About />
            <ContactMe />
         </div>
      </div>
   );
}
