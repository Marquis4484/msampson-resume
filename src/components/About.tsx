import React from "react";
import Image from "next/image";
import Headshot from "public/assets/_MG_8534.jpg";
import Link from "next/link";

export default function About() {
   return (
      <div id="About" className="pt-[80px]">
         <h1 className="phone:text-[35px] text-th-text-ms tablet:text-[40px] font-semibold text-bold text-center pb-[10px]">
            A Bit About Myself
         </h1>
         <div className="flex tablet:flex-row phone:flex-col tablet:pt-[15px]">
            <Image
               alt="Headshot"
               src={Headshot}
               className="phone:w-[200px] phone:h-[300px] tablet:w-[300px] tablet:h-[400px] flex-1 rounded-lg self-center
                    shadow-[12px_12px_2px_1px_rgba(99,99,99,1)]"
            />

            <div className="flex flex-col  py-6">
               <h2 className="font-semibold px-[20px] text-th-text-ms text-[25px] text-center pb-[20px]">
                  When it comes to my work ethic...
               </h2>
               <p className="phone:px-[20px] tablet:mx-[50px] text-th-text-ms items-center text-[20px] self-center rounded-xl py-[10px] w-4/5 bg-th-content flex-2">
                  I am a hard-working individual with a tenacious attitude and
                  an eagerness to learn. Perseverance is what allows me to learn
                  and grow within this field. Without these traits, I would not
                  be able to thrive as a software engineer. If I were to work
                  alongside your company, I would bring nothing but positive
                  energy and creative solutions to your team&apos;s workflow.
                  Please, consider me for whatever project you have in mind.
                  Also, if you would like to download a copy of my resume click
                  on the button below. Otherwise, please enjoy looking at the
                  rest of my website!
               </p>
            </div>
         </div>
      </div>
   );
}
