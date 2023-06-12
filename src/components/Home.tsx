import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Home() {
   return (
      <div>
         <p>Hello,my name is</p>
         <span>Marquis Sampson</span>
         <div className="border-t-[3px]"></div>
         <span>Software Developer</span>
         <p>Welcome to my website</p>
         <p>While you are exploring this webpage please...</p>
         <p>Feel free to</p>
         <p>set the mood</p>
         <button>
            <ArrowPathIcon className="h-[52px] w-[66px]" />
         </button>
      </div>
   );
}
