import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="flex items-center space-x-2">
      <Input type="email" placeholder="Search by Job, Company Name..  " />
      <Button type="submit">Add a new Job</Button>
    </div>
  );
}

export default SearchBar;
