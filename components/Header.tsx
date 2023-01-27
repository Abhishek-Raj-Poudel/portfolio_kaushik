import React from "react";
import Navbar from "./Navbar";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="h-screen">
      <Navbar />
    </div>
  );
}
