import React, { useState } from "react";
import { Input } from "../ui/input";
import { PlusIcon } from "lucide-react";

import JobDialogTrigger from "../shared/JobDialogTrigger";
import { createClient } from "@/lib/supabase/server";
import RedirectButton from "../Home/RedirectButton";
type Props = {};

async function SearchBar({}: Props) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Input type="text" placeholder="Job title or keyword " />
        {user ? (
          <JobDialogTrigger triggerName="Add Job" icon={<PlusIcon />} />
        ) : (
          <RedirectButton isAddJob={true} />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
