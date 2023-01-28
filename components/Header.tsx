import React from "react";
import Link from "next/link";
import { FiFacebook, FiPhone, FiSun } from "react-icons/fi";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between glassmorphism py-4 px-90  z-20 ">
      {/* links */}
      <Link href="/" className="bg-primary text-white p-2 rounded-full">
        <FiFacebook className="w-6 h-6" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FiPhone className="w-6 h-6" />
          <span className="text-xl">9841424169</span>
        </div>
        <button>Hire Me!!</button>
        <Link href="/" className="bg-primary text-white p-2 rounded-full">
          <FiSun className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
