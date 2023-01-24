import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="flex  justify-end bg-glassmorphism_light py-4 px-90 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex"> Phone : 9841424169</div>
          <button>Hire Me!</button>
        </div>
      </div>
    </>
  );
}
