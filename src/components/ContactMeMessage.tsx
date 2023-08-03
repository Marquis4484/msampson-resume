"use client";
import { useState, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Confetti from "react-confetti";

interface ContactMeValues {
   message: boolean;
   setMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactMeMessage({ message, setMessage }: ContactMeValues) {
   const handleClose = () => {
      setMessage(false);
   };

   return (
      <div>
         <div
            className={`${
               message ? "z-[5] opacity-100 " : " z-[-4] opacity-0  "
            } " bg-th-content flex flex-col fixed py-[20px] px-[30px] rounded-[50px] text-center left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[60%] h-[60%] duration-300 "`}
         >
            <h1 className="text-th-text-ms font-bold phone:text-[22px] tablet:text-[25px] pb-[24px]">
               Your Message is Appreciated!
            </h1>

            <p
               className="text-th-text-ms tablet:place-self-center
             phone:text-[12px] tablet:text-[18px] "
            >
               It may some time to respond to your message. Nevertheless, I will
               get back to you as soon as I can!
            </p>
         </div>
         <div
            onClick={handleClose}
            className={`${
               message
                  ? "opacity-[0.4] z-[2] top-0 right-0 left-0 bottom-0 h-[100%]"
                  : "z-[-1] opacity-0"
            } h-screen w-screen bg-[#000000] fixed duration-[400ms] `}
         />

         <button
            onClick={handleClose}
            className={`${message ? "opacity-100 z-[3]" : "opacity-0 z-[-1]"} 
            bg-th-background hover:text-th-button-highlight rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-th-button" />
         </button>
      </div>
   );
}

export default ContactMeMessage;
