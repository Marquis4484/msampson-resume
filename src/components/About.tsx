import React from "react";
import Image from "next/image";
import Headshot from "public/assets/_MG_8534.jpg";

export default function About() {
   return (
      <div id="About" className="pt-[80px]">
         <h1 className="phone:text-[30px] tablet:text-[40px] text-bold text-center pb-[10px]">
            A Bit About Myself
         </h1>
         <div className="flex tablet:flex-row phone:flex-col tablet:pt-[50px]">
            <Image
               alt="Headshot"
               src={Headshot}
               className="w-[200px] h-[300px] flex-1 rounded-lg shadow-[12px_12px_2px_1px_rgba(99,99,99,1)]"
            />
            <div className="flex flex-col">
               <h2 className="font-semibold px-[40px] tablet:text-[24px] pb-[20px]">
                  When it comes to my work ethic...
               </h2>
               <p className="px-[40px] text-[18px] flex-2">
                  I am a hard-working individual with a tenacious attitude and
                  an eagerness to learn. Perseverance is what allows me to
                  continue to learn and grow within this field. Without these
                  traits, I would not be able to thrive as a software developer.
                  If I were to work alongside your team, I would bring nothing
                  but positive energy and creative solutions to your team&apos;s
                  workflow. Please, consider me for whatever project you have in
                  mind. I promise I won&apos;t disappoint you!
               </p>
            </div>
         </div>
      </div>
   );
}
