import Link from "next/link";
import React from "react";
import { FiFacebook } from "react-icons/fi";

type Props = {};

export default function SocialLink({}: Props) {
  return (
    <>
      <Link
        href="https://www.facebook.com/shreekesh.kaushik"
        target="_blank"
        className=""
      >
        <button className="button_rounded">
          <FiFacebook className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </Link>
    </>
  );
}
