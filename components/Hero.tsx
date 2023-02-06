import Image from "next/image";
import React from "react";
import Testimony from "./Testimony";
// images and svgs
import mainImage from "../image/mainImage.png";
import Scorpio from "../image/SVGs/Scorpio.svg";
import Sagiterrious from "../image/SVGs/Sagiterrious.svg";
import Nav from "./Nav";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className=" relative h-screen flex flex-col items-center justify-center pt-10 overflow-hidden ">
      {/* Image */}
      <Image src={mainImage} alt="" className="z-10 w-[361px] h-[414px]" />
      {/* subheding */}
      <p className="uppercase  text-lg  text-primary tracking-[4px] xl:tracking-[6px] mt-3 z-10">
        Astrologer, Vastubid and More.
      </p>
      <h1 className="mt-1 mb-5 z-10 ">Shreekesh Kaushik</h1>

      <Nav />
      {/* Other elements absolute position elements */}
      <Testimony
        image={mainImage}
        style={
          " absolute hidden md:block md:left-[50px] lg:left-[100px]  xl:left-[551px]  top-[133px] md:top-[200px] lg:top-[300px]"
        }
      />
      <Testimony
        image={mainImage}
        style={
          " absolute z-[11] hidden md:block md:right-[10px] lg:right-[100px] xl:right-[500px] top-[320px] md:top-[430px]  "
        }
      />
      <Testimony
        image={mainImage}
        style={
          " absolute z-[11] hidden md:block md:left-[10px] lg:left-[100px] xl:left-[430px] top-[430px] md:top-[550px] "
        }
      />

      {/* <img src={Sagiterrious} alt="" /> */}
      <div className="absolute text-heading dark:text-dark-heading opacity-20 top-[86px] right-[-350px] xl:top-[185px] xl:right-[140px]">
        <Scorpio />
      </div>
      <div className="absolute text-heading dark:text-dark-heading opacity-20 top-[500px] left-[-300px] xl:top-[450px] xl:left-[88px]">
        <Sagiterrious />
      </div>
    </div>
  );
}
