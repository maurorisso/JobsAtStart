"use client";

import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddJobDialog from "./AddJobDialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import JobDialogTrigger from "./JobDialogTrigger";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Input type="text" placeholder="Job title or keyword " />
        <JobDialogTrigger triggerName="Add Job" icon={<PlusIcon />} />
      </div>
    </div>
  );
}

export default SearchBar;
