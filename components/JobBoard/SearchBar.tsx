"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { PlusIcon } from "lucide-react";

import JobDialogTrigger from "../shared/JobDialogTrigger";

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
