import Image from "next/image";
import Link from "next/link";
import React from "react";
import scroll from "../image/scroll.png";

type Props = {
  title: string;
  discription: string;
  price?: number;
  requirements?: string[];
  perPerson?: boolean;
};

export default function Card({
  title,
  discription,
  price,
  requirements,
  perPerson,
}: Props) {
  return (
    <div className="px-5 pt-7 pb-9 rounded-lg flex flex-col items-center justify-between  glassmorphism gap-4 border-t-2 border-primary">
      <div className="flex flex-col gap-2">
        <Image src={scroll} alt="logo" className="self-center mb-2" />
        <h4 className="self-center">{title}</h4>
        <p className="max-w-xs dark:text-slate-400 ">{discription}</p>
        {requirements && (
          <>
            <p className="max-w-xs font-bold">Requirement</p>
            <ul className="ml-4">
              {requirements?.map((requirement, index) => (
                <li key={index} className="list-disc dark:text-slate-400">
                  {requirement}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 ">
        {price && (
          <p className=" font-bold text-heading dark:text-dark-heading text-3xl ">
            Rs. {price}
            {"   "}
            {perPerson && (
              <span className="text-slate-600">
                /<small>person</small>
              </span>
            )}
          </p>
        )}
        <Link href="#contacts" className="">
          <button className="w-full self-start">Call Now</button>
        </Link>
      </div>
    </div>
  );
}
