import React from "react";
import Link from "next/link";
import { FiFacebook, FiPhone, FiSun } from "react-icons/fi";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between glassmorphism py-4 px-90  z-20 ">
      {/* links */}
      <Link href="/" className="">
        <button className="button_rounded">
          <FiFacebook className="w-6 h-6" />
        </button>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FiPhone className="w-6 h-6" />
          <span className="text-xl">+977 9841424149</span>
        </div>
        <Link href="tel:9841424149">
          <button>Tap to Call.</button>
        </Link>
        <Link href="/" className="bg-primary text-white p-2 rounded-full">
          <FiSun className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
