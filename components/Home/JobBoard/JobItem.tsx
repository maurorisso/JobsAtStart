import React from "react";
import Vercel from "/public/vercel.svg";
import Link from "next/link";

import { HomeIcon, LapTimerIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Job } from "@/types/index";

function JobItem({
  title,
  company,
  location,
  salary,
  type,
  date,
  description,
  apply_url,
  logo,
  tags,
  sector,
}: Job) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
      date
    );
  }

  return (
    <div className="flex p-5 flex-1 w-full flex-col   border border-slate-700  rounded-md  transition-opacity duration-700 ease-in opacity-100">
      <div className=" flex   gap-5 rounded-md p-0">
        <img
          width={100}
          height={200}
          className="object-contain rounded-md"
          src={logo}
          alt="company logo"
        />
        <div className="flex-1">
          <AccordionTrigger className="">
            <div className="text-2xl">{title}</div>
          </AccordionTrigger>

          <div className="flex  items-center gap-3">
            <p className="text-xl">{company}</p>
            <div className="flex items-center gap-1">
              <span>📍</span>
              <div>{location}</div>
            </div>{" "}
            <div className="flex items-center gap-1">
              <span>🧭</span>
              <p>{type}</p>
            </div>
          </div>
        </div>
      </div>

      <AccordionContent className="border-0 ">
        <div className="text-left my-4">{description}</div>

        <div className="flex space-x-2 justify-between ">
          <div className="flex gap-2 justify-center items-center ">
            {tags.map((tag) => (
              <div
                className="bg-slate-900 text-white text-sm px-2 py-1 rounded-md"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button>
                  <Link href={apply_url}>Apply</Link>
                </Button>{" "}
              </TooltipTrigger>
              <TooltipContent>
                <p>{apply_url}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-5 text-sm ">Posted on {formatDate(date)} </div>
      </AccordionContent>
    </div>
  );
}

export default JobItem;
