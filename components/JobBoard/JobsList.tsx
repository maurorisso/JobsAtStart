import React from "react";
import JobItem from "./JobItem";
import Vercel from "/public/vercel.svg";
type Props = {};

function JobsList({}: Props) {
  return (
    <div className="flex flex-1">
      <JobItem
        title="Frontend Developer"
        company="Google"
        location="Remote"
        salary="100k"
        type="Full Time"
        date="1 day ago"
        sector="Tech"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        applyLink="https://google.com"
        logo={Vercel}
        tags={["frontend", "react", "javascript"]}
      />
    </div>
  );
}

export default JobsList;
