import React from "react";
import Image from "next/image";

export default function About() {
   return (
      <div className="pt-[80px]">
         <h1 className="text-[30px] text-bold text-center pb-[10px]">
            A Bit About Myself
         </h1>
         <h2 className="font-semibold text-center pb-[20px]">
            When it comes to my work ethic...
         </h2>

         <p className="px-[20px]">
            I am a hard-working individual with a tenacious attitude and an
            eagerness to learn. Perseverance is what allows me to continue to
            learn and grow within this field. Without these traits, I would not
            be able to code as well as I can. If I were to work alongside your
            team, I would bring nothing but positive energy and creative
            solutions to your workflow. Please, consider me for whatever project
            you have in mind. I promise I won&apos;t disappoint you!
         </p>
      </div>
   );
}
