import Image from "next/image";
import React from "react";
import Testimony from "./Testimony";
// images and svgs
import mainImage from "../image/mainImage.png";
import Scorpio from "../image/SVGs/Scorpio.svg";
import Sagiterrious from "../image/SVGs/Sagiterrious.svg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center pt-10 ">
      {/* Image */}
      <Image src={mainImage} alt="" className="z-10" />
      {/* subheding */}
      <p className="uppercase text-lg text-primary  tracking-[6px] mt-3 z-10">
        Astrologer, Vastubid and More.
      </p>
      <h1 className="mt-1 z-10">Shreekesh Kaushik</h1>
      {/* navigation */}
      <nav className="mt-5 flex gap-4 z-10">
        <Link href="#about">
          <button>About</button>
        </Link>
        <button>Services</button>
        <button>Contacts</button>
      </nav>
      <Testimony
        image={mainImage}
        style={" absolute left-[551px] top-[133px] "}
      />
      <Testimony
        image={mainImage}
        style={" absolute z-[11] right-[500px] top-[320px]  "}
      />
      <Testimony
        image={mainImage}
        style={" absolute z-[11] left-[430px] top-[430px]  "}
      />
      {/* <img src={Sagiterrious} alt="" /> */}
      <div className="absolute text-heading opacity-20 top-[185px] right-[140px]">
        <Scorpio />
      </div>
      <div className="absolute text-heading opacity-20 top-[450px] left-[88px]">
        <Sagiterrious />
      </div>
    </div>
  );
}
