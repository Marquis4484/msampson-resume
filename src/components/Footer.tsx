import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center bg-[#000000] h-[150px]">
      <p className="text-[#ffffff] py-[5px]">Contact Links</p>
      <div className="flex flex-row m-[5px]">
        <a
          href="https://github.com/Marquis4484"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className=" duration-200 active:text-th-button-highlight text-[50px] mx-[12px] text-th-nav-link hover:text-th-button-highlight" />
        </a>
        <a
          href="https://www.linkedin.com/in/marquis-sampson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="duration-200 active:text-th-button-highlight mx-[12px] text-[50px] text-th-nav-link hover:text-th-button-highlight" />
        </a>

        <a href="mailto:marquis4484@gmail.com">
          <FaEnvelope className="duration-200 active:text-th-button-highlight mx-[12px] text-[50px] text-th-nav-link hover:text-th-button-highlight" />
        </a>
      </div>
      <span className="text-white text-center">
        Copyright © 2022 Marquis Sampson. All Rights Reserved.
      </span>
    </div>
  );
}
