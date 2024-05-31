import React from "react";
import Image from "next/image";
import people from "@/public/people.jpg";
import Star from "../shared/Star";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="flex  justify-around items-center  p-10 flex-1  ">
      <div className="flex flex-col justify-center items-start gap-4 w-2/6 ">
        <h1 className="text-4xl font-bold">Find Your Future at START</h1>
        <p className="text-xl mt-2">
          Explore exciting opportunities across tech, business, VC, and more
          within the vibrant Start community.
        </p>
        <Button variant={"outline"}>
          <Link target="_blank" href="https://www.startglobal.org/">
            About Start
          </Link>
        </Button>
      </div>

      <Star />
    </div>
  );
}

export default HeroSection;
