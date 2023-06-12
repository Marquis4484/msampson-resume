import React from "react";
import { About, ContactMe, Home } from "@/components";

export default function HomePage() {
   return (
      <h1>
         <Home />
         <About />
         <ContactMe />
      </h1>
   );
}
