import React from "react";
import Link from "next/link";
import { FiFacebook, FiPhone, FiSun } from "react-icons/fi";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex items-center justify-between bg-glassmorphism_light py-4 px-90 backdrop-blur">
      {/* links */}
      <Link href="/">
        <div className="bg-primary text-white p-2 rounded-full">
          <FiFacebook className="w-6 h-6" />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FiPhone className="w-6 h-6" />
          <span className="text-xl">9841424169</span>
        </div>
        <button>Hire Me!!</button>
        <div className="bg-primary text-white p-2 rounded-full">
          <FiSun className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
