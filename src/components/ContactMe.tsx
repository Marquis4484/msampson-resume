import emailjs from "emailjs-com";
import { useState } from "react";
import ContactMeMessage from "./ContactMeMessage";

export default function ContactMe() {
   const [message, setMessage] = useState(false);

   const handleSubmit = (e: any) => {
      e.preventDefault();
      setMessage(true);

      emailjs
         .sendForm(
            "process.env.YOUR_SERVICE_ID",
            "process.env.YOUR_TEMPLATE_ID",
            e.target,
            "process.env.YOUR_PUBLIC_KEY"
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset;
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
            <form onSubmit={handleSubmit} className="flex flex-col" action="">
               <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#D9D9D9] w-[260px] my-[20px] "
                  required
               />
               <textarea
                  placeholder="Leave a quick Message"
                  className="bg-[#D9D9D9] h-[280px] w-[260px]"
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
