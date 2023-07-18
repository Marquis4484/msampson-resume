import { useState, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Confetti from "react-confetti";

interface ContactMeValues {
   message: boolean;
   setMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactMeMessage({ message, setMessage }: ContactMeValues) {
   const [windowDimension, setWindowDimension] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
   });

   const detectSize = () => {
      setWindowDimension({
         width: window.innerWidth,
         height: window.innerHeight,
      });
   };

   useEffect(() => {
      window.addEventListener("resize", detectSize);
      return () => {
         window.removeEventListener("resize", detectSize);
      };
   }, [windowDimension]);

   const handleClose = () => {
      setMessage(false);
   };

   let width: number = 42;
   let height: number = 42;

   return (
      <div>
         {message && (
            <Confetti
               numberOfPieces={200}
               width={windowDimension.width}
               height={windowDimension.height}
               tweenDuration={1000}
            />
         )}
         <div
            className={`${
               message ? "z-[5] opacity-100 " : " z-[-4] opacity-0  "
            } " bg-[#D9D9D9] fixed py-[20px] px-[30px] rounded-[50px] text-center left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[60%] h-[60%] duration-300 "`}
         >
            <h1>Your Message is Appreciated!</h1>

            <p>
               It may take a while to respond to your message. Nevertheless, I
               will respond to your message as soon as possible!
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
            bg-[#A5A5A5] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
         >
            <XCircleIcon className="text-[50px] text-[#000000]" />
         </button>
      </div>
   );
}

export default ContactMeMessage;
