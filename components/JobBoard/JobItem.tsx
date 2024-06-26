"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
import { createClient } from "@/lib/supabase/client";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

function JobItem({
  id,
  title,
  company,
  location,
  type,
  date,
  description,
  apply_url,
  created_by,
  logo,
  tags,
  sector,
}: Job) {
  const [imgSrc, setImgSrc] = useState(logo);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
      date
    );
  }
  const router = useRouter();

  const handleDelete = async () => {
    const supabase = createClient();
    const { error } = await supabase.from("job_listings").delete().eq("id", id);

    if (error) {
      console.error("Error deleting job:", error);
      toast({
        variant: "destructive",
        action: (
          <div className="w-full flex gap-2 items-center">
            Error deleting job. Please try again.
          </div>
        ),
      });
      return;
    }

    toast({
      action: (
        <div className="w-full flex gap-2 items-center ">
          <Check color="green" size={50} />
          <span className="first-letter:capitalize">{` Job Deleted succesfully
          `}</span>
        </div>
      ),
    });
    router.refresh();
  };

  useEffect(() => {
    const fetchId = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error getting user:", error.message);
        return;
      }
      setIsCurrentUser(user?.id === created_by);
    };
    fetchId();
  }, []);

  const [isCurrentUser, setIsCurrentUser] = useState(false);

  return (
    <div>
      {isCurrentUser ? (
        <div className="text-gray-500 mb-1">Your posted this job</div>
      ) : null}
      <div className="flex p-5 flex-1 w-full flex-col   border border-slate-700  rounded-md  transition-opacity duration-700 ease-in opacity-100">
        <div className=" flex   gap-5 rounded-md p-0">
          <img
            width={100}
            height={200}
            className="object-contain rounded-md"
            src={imgSrc}
            alt="company logo"
            onError={() =>
              setImgSrc(
                "https://cdn.prod.website-files.com/5fb2dd371e5ff1a34480d61e/5fb3ec658130f4786779ac20_START_berlin_white.png"
              )
            }
          />
          <div className="flex-1">
            <AccordionTrigger className="">
              <div className="text-2xl">{title}</div>
            </AccordionTrigger>

            <div className="flex  p-1 items-center gap-2">
              <div className="flex items-center gap-1">
                <span>💼</span>
                <p className="text-xl">{company}</p>
              </div>{" "}
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
            <div className="mt-5 text-sm  mb-4">
              Posted on {formatDate(date ?? "")}{" "}
            </div>
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

          {isCurrentUser ? (
            <div className="flex w-full justify-end border-t pt-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the job listing.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ) : null}
        </AccordionContent>
      </div>
    </div>
  );
}

export default JobItem;
