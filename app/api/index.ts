import { Job } from "@/types";
import { createClient } from "../../lib/supabase/client"

export async function addJob(job: Job) {
  const supabase = createClient();
  console.log("Attempting to add a job to Supabase...");

  const { data, error } = await supabase.from("job_listings").insert([job]);

  if (error) {
    console.error("Error adding job to Supabase:", error);
    console.error("Job data:", job);    
    throw error
  }
  console.log("Successfully added job to Supabase:", data);
  return data; // Return data for further processing if necessary
}






