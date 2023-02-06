import Link from "next/link";
import React from "react";
import { FiBriefcase, FiInfo, FiUser } from "react-icons/fi";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className=" flex gap-3 md:gap-4 z-10">
      <Link href="#about">
        <button>
          <FiUser className="w-5 h-5" />
          <span className="hidden md:block">About</span>
        </button>
      </Link>

      <Link href="#services">
        <button>
          <FiBriefcase className="w-5 h-5" />
          <span className="hidden md:block">Services</span>
        </button>
      </Link>

      <Link href="#contacts">
        <button>
          <FiInfo className="w-5 h-5" />
          <span className="hidden md:block">Contacts</span>
        </button>
      </Link>
    </nav>
  );
}
