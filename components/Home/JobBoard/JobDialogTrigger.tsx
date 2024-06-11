"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import AddJobDialog from "./AddJobDialog";

type Props = {
  icon: React.ReactNode;
  triggerName: string;
  isHeroSection?: boolean;
};

function JobDialogTrigger({ triggerName, icon, isHeroSection = false }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant={isHeroSection ? "link" : "default"}
          onClick={openDialog}
          className={isHeroSection ? "text-md ml-0 pl-2" : ""}
        >
          {isHeroSection ? (
            <span className="flex justify-center items-center font-normal ">
              {triggerName} {icon}{" "}
            </span>
          ) : (
            <span className="flex items-center">
              {icon} {triggerName}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <AddJobDialog closeDialog={closeDialog} />
    </Dialog>
  );
}

export default JobDialogTrigger;
