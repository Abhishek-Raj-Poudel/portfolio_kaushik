import React from "react";
import Image from "next/image";
import mainImage from "../image/mainImage.png";
import Testimony from "./Testimony";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="relative h-screen flex flex-col justify-center  items-center gap-8 px-90 ">
      <h2 className="text-5xl  font-bold tracking-[.2em] uppercase">
        About me
      </h2>
      <div className="flex items-center">
        <Image src={mainImage} alt="" className="z-10" />
        <div className="flex  flex-col gap-4">
          <h3 className="text-[40px] font-poppins font-bold">
            A little bit about me
          </h3>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            tempus ligula. Vestibulum diam justo, sodales quis elit in, finibus
            mattis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam sed tempus ligula. Vestibulum diam justo, sodales quis
            elit in, finibus mattis mauris. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam sed tempus ligula. Vestibulum
            diam justo, sodales quis elit in, finibus mattis mauris.
          </p>
        </div>
      </div>
      <div className="z-10 flex gap-6 pt-10 pb-2 mt-4 overflow-x-scroll w-[1500px]">
        <Testimony image={mainImage} style="" />
        <Testimony image={mainImage} style="" />
        <Testimony image={mainImage} style="" />
        <Testimony image={mainImage} style="" />
        <Testimony image={mainImage} style="" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 239 726"
        className="absolute left-12 top-48 z-0 w-[168px] h-[511px] text-heading opacity-20"
      >
        <g clipPath="url(#clip0_56_1800)">
          <path d="M160.02 257.821l6.25-6.658-8.7-.883 1.45-7.701-6.91 3.499-3.72-6.808-3.16 7.159-7.67-4.211 1.39 9.035-7.37 1.394 4.88 4.382-5.87 5.545 9.59 1.564-1.11 8.674 5.8-3.379 2.87 6.077 3.99-7.772 8.78 4.162-1.7-7.912 6.5-.832-5.29-5.335zM66.71 97.338l6.25-6.648-8.7-.892 1.45-7.692-6.91 3.49-3.72-6.809-3.16 7.17-7.67-4.212 1.39 9.025-7.37 1.394 4.88 4.382-5.87 5.545 9.59 1.565-1.11 8.674 5.8-3.38 2.86 6.087 4-7.781 8.78 4.161-1.7-7.902 6.5-.842-5.29-5.335zM59.39 707.651l6.25-6.648-8.71-.893 1.45-7.691-6.91 3.5-3.72-6.819-3.15 7.17-7.68-4.212 1.39 9.025-7.37 1.404 4.88 4.372-5.87 5.545 9.59 1.565-1.1 8.674 5.79-3.38 2.87 6.087 3.99-7.781 8.79 4.161-1.7-7.902 6.49-.832-5.28-5.345zM236.81 716.847a10.184 10.184 0 01-4.547 3.778 10.141 10.141 0 01-5.873.608 10.158 10.158 0 01-5.221-2.767 10.206 10.206 0 01-2.808-5.209 10.23 10.23 0 01.552-5.895 10.194 10.194 0 013.726-4.594 10.15 10.15 0 0111.301-.05 10.195 10.195 0 014.352 6.468c.538 2.65.005 5.405-1.482 7.661zM133.684 176.327c4.548-3.305 5.563-9.681 2.267-14.242-3.295-4.561-9.654-5.578-14.202-2.274-4.548 3.305-5.563 9.682-2.268 14.242 3.296 4.561 9.655 5.579 14.203 2.274zM126 108.349a10.164 10.164 0 01-4.545 3.779 10.133 10.133 0 01-11.091-2.162 10.212 10.212 0 01-2.239-11.106 10.178 10.178 0 013.736-4.585 10.14 10.14 0 0111.299-.015 10.2 10.2 0 014.316 6.457c.532 2.64.001 5.383-1.476 7.632zM95.862 20.32c5.575-.686 9.54-5.773 8.857-11.363-.684-5.59-5.757-9.567-11.332-8.882-5.575.686-9.54 5.773-8.857 11.364.683 5.59 5.757 9.566 11.332 8.88zM18.64 183.887a10.169 10.169 0 01-4.546 3.767 10.135 10.135 0 01-11.077-2.168 10.214 10.214 0 01-2.245-11.092 10.18 10.18 0 013.722-4.586 10.136 10.136 0 0111.286-.05 10.166 10.166 0 014.355 6.469 10.204 10.204 0 01-1.495 7.66z"></path>
          <path d="M228.33 713.287a2.007 2.007 0 01-2-1.705l-79.92-453.871-20.69-89.247-10.2-65.49L94 16.415 57 97.77l-45 81.484a2.06 2.06 0 01-2.771.751 2.07 2.07 0 01-.829-2.756l45-81.345L92.75 9.336a2.054 2.054 0 012.058-1.2 2.047 2.047 0 011.802 1.56l22.94 92.526 10.2 65.52 20.68 89.186 79.92 453.932a1.999 1.999 0 01-.319 1.551 2.001 2.001 0 01-1.341.836 1.506 1.506 0 01-.36.04z"></path>
          <path d="M47.79 709.286a1.794 1.794 0 01-.45-.05 1.996 1.996 0 01-1.3-.895 2.01 2.01 0 01-.25-1.562l100.63-449.841a2.056 2.056 0 013.64-.539c.294.419.423.933.36 1.442L49.8 707.681a2.063 2.063 0 01-2.01 1.605z"></path>
        </g>
        <defs>
          <clipPath id="clip0_56_1800">
            <path d="M0 0H238.5V725.35H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
