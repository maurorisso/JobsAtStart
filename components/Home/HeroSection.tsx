import React from "react";
import Image from "next/image";
import people from "@/public/people.jpg";
import { ArrowRight } from "lucide-react";
import Star from "../shared/Star";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import JobDialogTrigger from "../shared/JobDialogTrigger";
import { createClient } from "@/lib/supabase/server";
import { link } from "fs";
import RedirectButton from "./RedirectButton";

type Props = {};

async function HeroSection({}: Props) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex  justify-around items-center  p-10 flex-1  ">
      <div className="flex flex-col justify-center items-start gap-4 w-2/6 ">
        <h1 className="text-4xl font-bold">Find Your Future at START</h1>
        <p className="text-xl mt-2">
          Explore exciting opportunities across tech, business, VC, and more
          within the vibrant Start community.
        </p>

        <div className="flex gap-2">
          <div className="ml-5">
            Hiring?
            <span className="text-xl">🕵️</span>
            {user ? (
              <JobDialogTrigger
                isHeroSection={true}
                triggerName="Post a Job"
                icon={<ArrowRight size={16} />}
              />
            ) : (
              <RedirectButton />
            )}
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
