"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

interface Nav {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isOpen, setIsOpen }: Nav) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Skills", label: "Skills" },
    { href: "/Projects", label: "Projects" },
    { href: "/ContactMe", label: "ContactMe" },
  ];

  const handleColorChange = (e: any) => {
    setTheme(themes[themeIdx].name.toLowerCase());
    setThemeIdx((themeIdx + 1) % themes.length);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeIdx, setThemeIdx] = useState(0);

  const themes = [
    { name: "Dark" },
    { name: "Forrest" },
    { name: "DarkCherry" },
    { name: "Sky" },
    { name: "Strawberry" },
    { name: "Normal" },
  ];

  const path = usePathname();
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div
      className="duration-300 flex flex-row justify-between 
         items-center bg-th-nav-link h-[80px] px-[20px] w-full fixed
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] z-[2]"
    >
      {path === "/" ? (
        <div
          className="text-[28px]
             border-2 border-th-text-ms bg-white text-black rounded-full p-2 "
        >
          MS
        </div>
      ) : (
        <button
          value={theme}
          onClick={handleColorChange}
          className=" cursor-pointer duration-200 hover:scale-125 active:scale-100 active:rotate-180 bg-th-button z-0 border-none outline-none text-th-text-ms rounded-full h-[60px] w-[60px] p-2 hover:bg-th-button-highlight"
        >
          <ArrowPathIcon />
        </button>
      )}

      <nav className="phone:hidden laptop:block px-4">
        <ul className="flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="relative px-3 text-th-text-ms text-2xl hover:text-th-button-highlight duration-200 active:text-th-button-highlight"
                href={link.href}
              >
                {link.href === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[3px] rounded-full w-full bg-th-text-ms "
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex flex-row laptop:hidden">
        <Bars3Icon
          className="text-th-text-ms h-[52px] w-[66px]"
          onClick={handleOpen}
        />
      </button>
    </div>
  );
}
