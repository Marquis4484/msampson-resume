"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactMeMessage } from "@/components";

export default function ContactMe() {
  const [message, setMessage] = useState(false);
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC
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
      <div className="pt-[80px] duration-300 flex flex-col bg-th-background items-center phone:h-fit laptop:h-screen justify-center">
        <h1 className=" text-th-text-ms text-[50px]  text-bold text-center p-[20px]  font-black">
          Thank you for visiting my webpage!
        </h1>
        <p className="text-[25px] text-bold text-center text-th-text-ms pb-[5px]">
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
            className="bg-gray-200 self-center w-[300px] my-[20px] "
            name="email"
            required
          />

          <textarea
            placeholder="Leave a quick Message"
            className="bg-gray-200 h-[280px] w-[400px]"
            required
            name="message"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-th-button hover:bg-th-button-highlight p-[8px] m-[10px] text-th-text-ms rounded-[50px] self-center duration-200 active:text-th-button-highlight"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
