import React from "react";
import Image from "next/image";
import people from "@/public/people.jpg";
import { ArrowRight } from "lucide-react";
import Star from "../shared/Star";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import JobDialogTrigger from "./JobBoard/JobDialogTrigger";

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

        <div className="flex gap-2">
          {/* <Button variant={"outline"}>
            <Link target="_blank" href="https://www.startglobal.org/">
              About Start
            </Link>
          </Button> */}
          <div className="ml-5">
            Hiring?
            <span className="text-xl">🕵️</span>
            <JobDialogTrigger
              isHeroSection={true}
              triggerName="Post a Job"
              icon={<ArrowRight size={16} />}
            />
          </div>
        </div>
      </div>

      <div className="rotate-continuous ">
        <div className="transition-transform duration-300 hover:rotate-45 scale-110">
          <Star />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
