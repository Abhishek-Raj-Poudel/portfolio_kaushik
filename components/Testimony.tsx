import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: string | StaticImageData;
  style: string | null;
  comment?: string;
};

export default function Testimony({ image, style, comment }: Props) {
  return (
    <div
      className={` bg-slate-600 rounded-lg glassmorphism pl-8 pt-9 pr-2 pb-2  ${style} `}
    >
      <div className="absolute top-[-37px] left-0 z-[2] bg-photoBackground rounded-full  w-fit">
        <Image src={image} alt="" className="w-[68px] h-[68px] rounded-full" />
      </div>
      <p className="w-80">
        {comment
          ? comment
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </p>
    </div>
  );
}
