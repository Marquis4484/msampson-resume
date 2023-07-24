import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactMeMessage from "./ContactMeMessage";

export default function ContactMe() {
   const [message, setMessage] = useState(false);
   const form: any = useRef();

   const handleSubmit = (e: any) => {
      e.preventDefault();
      setMessage(true);

      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_YOUR_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID ?? "",
            form.current,
            process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
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
            <h1 className="text-[30px] text-bold text-center pb-[8px] text-th-text-ms font-semibold">
               Thank you for visiting my webpage!
            </h1>
            <p className="text-[20px] text-bold text-center text-th-text-ms pb-[5px]">
               Enter your email and leave a message so we can get in touch!
            </p>
            <form
               ref={form}
               onSubmit={handleSubmit}
               className="flex flex-col"
               action=""
            >
               <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 w-[260px] my-[20px] "
                  name="email"
                  required
               />

               <textarea
                  placeholder="Leave a quick Message"
                  className="bg-gray-200 h-[280px] w-[260px]"
                  required
                  name="message"
               ></textarea>
               <button
                  onClick={handleSubmit}
                  className="bg-th-button hover:bg-th-button-highlight p-[8px] m-[10px] text-th-text-ms rounded-[50px] self-center"
               >
                  Send
               </button>
            </form>
         </div>
      </>
   );
}
