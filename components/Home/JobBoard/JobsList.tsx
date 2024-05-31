import React from "react";
import JobItem from "./JobItem";
import Vercel from "/public/vercel.svg";
import { Accordion, AccordionItem } from "../../ui/accordion";
import { fetchJobs } from "@/lib/supabase/actions";

type Props = {};

async function JobsList({}: Props) {
  const data = await fetchJobs();
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-1 flex-col gap-5 w-full"
    >
      {data.map((job, idx) => (
        <AccordionItem value={`value-${idx}`} className="w-full" key={job.id}>
          <JobItem
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
            logo={job.logo}
            tags={job.tags}
            apply_url={job.apply_url}
            date={job.date}
            description={job.description}
            sector={job.sector}
            salary={job.salary}
          />
        </AccordionItem>
      ))}
      <span id="board"></span>
    </Accordion>
  );
}

export default JobsList;
