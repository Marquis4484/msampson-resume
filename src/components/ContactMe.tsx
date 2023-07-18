import { useState } from "react";
import ContactMeMessage from "./ContactMeMessage";

export default function ContactMe() {
   const [message, setMessage] = useState(false);

   const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setMessage(true);
   };

   return (
      <>
         <ContactMeMessage message={message} setMessage={setMessage} />
         <div id="ContactMe" className="pt-[80px] flex flex-col  items-center ">
            <h1 className="text-[30px] text-bold text-center pb-[8px] font-semibold">
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
