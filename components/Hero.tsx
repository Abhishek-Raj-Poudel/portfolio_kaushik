import Image from "next/image";
import React from "react";
import Testimony from "./Testimony";
// images and svgs
import mainImage from "../image/mainImage.png";
import Scorpio from "../image/SVGs/Scorpio.svg";
import Sagiterrious from "../image/SVGs/Sagiterrious.svg";
import Nav from "./Nav";
import { motion } from "framer-motion";
type Props = {};

export default function Hero({}: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const backgroundAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.1,
    },
  };

  const testimonialAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" relative h-screen flex flex-col items-center justify-center pt-10 gap-2 overflow-hidden ">
      {/* Image */}
      <Image src={mainImage} alt="" className="z-10 w-[361px] h-[414px]" />
      {/* subheding */}
      <p className="uppercase  text-lg  text-primary tracking-[4px] xl:tracking-[6px] mt-3 z-10">
        Astrologer, Vastubid and More.
      </p>
      <h1 className="mt-1 mb-5 z-10 xl:mt-4 ">Shreekesh Kaushik</h1>

      <Nav />
      {/* Other elements absolute position elements */}
      {/* <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div variants={testimonialAnimation}>
          <Testimony
            image={mainImage}
            style={
              " absolute hidden md:block md:left-[50px] lg:left-[100px]  xl:left-[551px]  top-[133px] md:top-[200px] lg:top-[300px]"
            }
          />
        </motion.div>
        <motion.div variants={testimonialAnimation}>
          <Testimony
            image={mainImage}
            style={
              "absolute z-[11] hidden md:block md:right-[10px] lg:right-[100px] xl:right-[500px] top-[320px] md:top-[430px]"
            }
          />
        </motion.div>
        <motion.div variants={testimonialAnimation}>
          <Testimony
            image={mainImage}
            style={
              "absolute  z-[11] hidden md:block md:left-[10px] lg:left-[100px] xl:left-[450px] top-[430px] md:top-[550px] lg:top-[500px]"
            }
          />
        </motion.div>
      </motion.div> */}

      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.div
          // key={1}
          variants={backgroundAnimation}
          className="absolute text-heading dark:text-dark-heading opacity-20 top-[86px] right-[-350px] xl:top-[185px] xl:right-[140px]"
        >
          <Scorpio />
        </motion.div>
        <motion.div
          // key={2}
          variants={backgroundAnimation}
          className="absolute text-heading dark:text-dark-heading opacity-20 top-[500px] left-[-300px] xl:top-[450px] xl:left-[88px]"
        >
          <Sagiterrious />
        </motion.div>
      </motion.div>
    </div>
  );
}
