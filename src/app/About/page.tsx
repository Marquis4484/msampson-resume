import React from "react";
import Image from "next/image";
import Headshot from "public/assets/_MG_8534.jpg";
import Link from "next/link";

export default function About() {
  return (
    <div className="phone:h-fit laptop:h-screen duration-300 bg-th-background  pt-[80px]">
      <h1 className=" text-th-text-ms text-[50px]  text-bold text-center p-[20px]  font-black">
        A Little Bit About Myself
      </h1>
      <div className="flex tablet:flex-row phone:flex-col tablet:pt-[15px]">
        <Image
          alt="Headshot"
          src={Headshot}
          className=" m-[50px] phone:w-[200px] phone:h-[300px] tablet:w-[300px] tablet:h-[400px] flex-1 rounded-lg self-center
                    shadow-[12px_12px_2px_1px_rgba(99,99,99,1)]"
        />

        <div className="flex flex-col  py-6">
          <h2 className="font-semibold px-[20px] text-th-text-ms text-[25px] text-center pb-[20px]">
            When it comes to my work ethic...
          </h2>
          <p className="phone:px-[20px] tablet:mx-[50px] text-th-text-ms items-center text-[20px] self-center rounded-xl py-[10px] w-4/5 bg-th-content flex-2">
            I am a hard-working individual with a tenacious attitude and an
            eagerness to learn. Perseverance is what allows me to learn and grow
            within this field. Without these traits, I would not be able to
            thrive as a software engineer. If I were to work alongside your
            company, I would bring nothing but positive energy and creative
            solutions to your team&apos;s workflow. Please, consider me for
            whatever project you have in mind. Also, if you would like to view a
            copy of my resume, click on the button below. Otherwise, please
            enjoy viewing the rest of my website!
          </p>
          <Link
            href={"Online Copy of MarquisS Resume .pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-th-button hover:bg-th-button-highlight duration-200 active:text-th-button-highlight rounded-[50px] my-[20px] p-[8px] text-th-text-ms self-center"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
