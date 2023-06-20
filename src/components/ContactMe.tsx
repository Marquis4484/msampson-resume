import React from "react";

export default function ContectMe() {
   return (
      <div>
         <h1>Thank you for visiting my webpage!</h1>
         <p>Enter your email and leave a message so we can get in touch!</p>
         <form className="flex flex-col" action="">
            <input
               type="email"
               placeholder="Email"
               className="bg-[#D9D9D9] my-[30px] "
            />
            <input
               type="text"
               className="bg-[#D9D9D9] w-[260px] h-[200px] p-[10px] mb-[30px]"
               placeholder="Message"
            />
            <button className="bg-[#A5A5A5] rounded-[50px] p-[8px] self-center">
               Send
            </button>
         </form>
      </div>
   );
}
