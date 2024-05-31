import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
      date
    );
  }

  function DateDisplay({ date }) {
    return <div className="mt-5 text-sm">Posted on {formatDate(date)}</div>;
  }

  return (
    <AccordionItem value="item-1" className="w-full">
      <Card className="flex p-5 flex-1 w-full">
        <CardHeader className=" flex items-center justify-center ">
          {/* <Image width={200} height={200} src={logo} alt="company logo" /> */}
        </CardHeader>
        <CardContent className="flex-1">
          <AccordionTrigger className="">
            <div className="flex justify-between w-full">
              <CardTitle>{title}</CardTitle>
            </div>
          </AccordionTrigger>

          <div className="flex  items-center gap-1">
            {" "}
            <p className="text-xl">{company}</p>
            <span>-</span>
            <div>{location}</div>
            <span>-</span>
            <p>{type}</p>
            <p>{apply_url}</p>
          </div>

          <AccordionContent>
            <CardDescription className="text-left my-4">
              {description}
            </CardDescription>

            <div className="flex space-x-2 justify-between ">
              <div className="flex gap-2 justify-center items-center ">
                {tags.map((tag) => (
                  <CardDescription
                    className="bg-slate-900 text-white text-sm px-2 py-1 rounded-md"
                    key={tag}
                  >
                    {tag}
                  </CardDescription>
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
        </CardContent>
      </Card>
    </AccordionItem>
  );
}

export default JobItem;
