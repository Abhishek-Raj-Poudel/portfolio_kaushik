import Link from "next/link";
import React from "react";
import { FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import Nav from "./Nav";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="section gap-32">
      <h2 className="section_heading z-10">Contacts</h2>
      <div className="flex flex-col items-center justify-between  ">
        <div className="flex flex-col glassmorphism rounded-lg px-4 pt-7 pb-9 justify-center items-center gap-4">
          <h3>Any Questions, Let me know</h3>

          <Link href="tel:9841424149">
            <div className="flex items-center gap-2">
              <FiPhone className="w-6 h-6 text-primary" />
              <span className="text-xl">+977 9841424149</span>
            </div>
          </Link>

          <Link href="mailto:abhishekrajpoudel@gmail.com?Subject=Hello">
            {/* <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new"> */}
            <div className="flex items-center gap-2">
              <FiMail className="w-6 h-6 text-primary" />
              <span className="text-xl">kaushikshreekesh@gmail.com</span>
            </div>
          </Link>

          <Link href="/" className="">
            <button className="button_rounded">
              <FiFacebook className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Nav />
        <Link href="/" className="">
          <button className="button_rounded">
            <FiFacebook className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
