import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

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
            onClick={handleClose}
            className={`${
               message
                  ? "opacity-[0.4] z-[1] top-0 right-0 left-0 bottom-0 h-[100%]"
                  : "z-[-1] opacity-0"
            } h-screen w-screen bg-[#000000] fixed duration-[400ms] `}
         />
         <h1>Your Message is Appreciated!</h1>
         <button
            onClick={handleClose}
            className={`${message ? "opacity-100 z-[2]" : "opacity-0 z-[-1]"} 
            bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
         <p>
            It may take a while to respond to your message. Nevertheless, I will
            respond to your message as soon as possible!
         </p>
      </div>
   );
}

export default ContactMeMessage;
