import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { ComboboxDemo } from "./ComboBox";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="flex items-center space-x-2">
      <Input type="text" placeholder="Job title or keyword " />

      <ComboboxDemo />
      <Button type="submit">Add a new Job</Button>
    </div>
  );
}

export default SearchBar;
