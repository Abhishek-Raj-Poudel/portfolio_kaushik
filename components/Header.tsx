import React from "react";
import Link from "next/link";
import { FiFacebook, FiPhone, FiSun } from "react-icons/fi";
import ThemeButton from "./ThemeButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between glassmorphism px-4 py-4 xl:px-90  z-20 ">
      {/* links */}
      <Link
        href="https://www.facebook.com/shreekesh.kaushik"
        target="_blank"
        className=""
      >
        <button className="button_rounded">
          <FiFacebook className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </Link>
      <div className="flex items-center gap-4">
        <div className=" md:hidden">
          {/* <FiPhone className="w-6 h-6" /> */}
          <span className=" ">9841424149</span>
        </div>
        <Link href="tel:9841424149">
          <button>
            <FiPhone className="  w-5 h-5" />
            <span className="hidden md:block">Call Now!</span>
          </button>
        </Link>
        {/* <div className="bg-primary text-white p-2 rounded-full">
          <FiSun className="w-6 h-6" />
        </div> */}
        <ThemeButton />
      </div>
    </div>
  );
}
