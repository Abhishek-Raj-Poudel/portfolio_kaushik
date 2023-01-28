import { StatSyncOptions } from "fs";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: string | StaticImageData;
  style: string;
};

export default function Testimony({ image, style }: Props) {
  return (
    <div
      className={` bg-slate-600 rounded-lg glassmorphism pl-8 pt-9 pr-2 pb-2  ${style} `}
    >
      <div className="absolute top-[-37px] left-0 z-[2] bg-photoBackground rounded-full  w-fit">
        <Image src={image} alt="" className="w-[68px] h-[68px] rounded-full" />
      </div>
      <p className="max-w-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
}
