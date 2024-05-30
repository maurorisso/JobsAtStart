import React from "react";
import Image from "next/image";
import people from "@/public/people.jpg";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="max-w-screen-2xl mx-auto flex  justify-center items-center  p-10">
      <div>
        <h1 className="text-3xl font-bold">Find Your Future at Start</h1>
        <p className="text-xl mt-2">
          Explore exciting opportunities across tech, business, VC, and more
          within the vibrant Start community.
        </p>
      </div>

      <Image src={people} width={800} alt="start-summit" />
    </div>
  );
}

export default HeroSection;
