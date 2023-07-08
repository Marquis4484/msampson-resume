import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function ContactMe() {
   const [message, setMessage] = useState(false);

   const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setMessage(true);
   };

   const handleClose = () => {
      setMessage(false);
   };

   return (
      <>
         <div>
            <div>
               <h1>Your Message is Appreciated!</h1>

               <button
                  onClick={handleClose}
                  className={`${
                     message ? "opacity-100 z-[3]" : "opacity-0 z-[-10]"
                  } 
         bg-[#A5A5A5] opacity-100 z-[3] rounded-full h-[52px] w-[52px] fixed top-0 right-0 my-[19px] mx-[27px] duration-300 `}
               >
                  <XCircleIcon className="text-[50px] text-[#000000]" />
               </button>
               <p>
                  It may take a while to respond to your message. Nevertheless,
                  I will respond to your message as soon as possible!
               </p>
            </div>
            <div
               onClick={handleClose}
               className={`${
                  message ? "opacity-[0.4] z-[100]" : "z-[-1] opacity-0"
               } h-screen w-screen bg-[#000000] fixed duration-[400ms] `}
            />
         </div>

         <div id="ContactMe" className="pt-[80px] flex flex-col items-center">
            <h1 className="text-[30px] text-bold text-center pb-[8px]">
               Thank you for visiting my webpage!
            </h1>
            <p className="text-[20px] text-bold text-center pb-[5px]">
               Enter your email and leave a message so we can get in touch!
            </p>
            <form className="flex flex-col" action="">
               <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#D9D9D9] w-[260px] my-[20px] "
                  required
               />
               <textarea
                  placeholder="Leave a quick Message"
                  className="bg-[#D9D9D9] h-[180px] w-[260px]"
                  required
               ></textarea>
               <button
                  onClick={handleSubmit}
                  className="bg-[#A5A5A5] p-[8px] m-[10px] rounded-[50px] self-center"
               >
                  Send
               </button>
            </form>
         </div>
      </>
   );
}
