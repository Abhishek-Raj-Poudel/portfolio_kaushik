import Link from "next/link";
import React from "react";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className=" flex gap-4 z-10">
      <Link href="#about">
        <button>About</button>
      </Link>

      <Link href="#services">
        <button>Services</button>
      </Link>

      <Link href="#contacts">
        <button>Contacts</button>
      </Link>
    </nav>
  );
}
