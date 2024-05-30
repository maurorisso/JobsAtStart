import React from "react";
import Image from "next/image";
import people from "@/public/people.jpg";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="flex  flex-col gap-5 justify-center items-center  p-10 flex-1 ">
      <h1 className="text-4xl font-bold">Find Your Future at START</h1>
      <p className="text-xl mt-2">
        Explore exciting opportunities across tech, business, VC, and more
        within the vibrant Start community.
      </p>
    </div>
  );
}

export default HeroSection;
