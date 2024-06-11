import { Job } from "@/types/index";
import { createClient } from "./server";

// Assuming this is your fetch function based on the shared code.
export async function fetchJobs(): Promise<Job[]> {
  console.log("Attempting to fetch data from Supabase...");

  const supabase = createClient(); // Make sure this is correctly initializing Supabase.
  // from recent created  to oldest
  const { data, error } = await supabase
    .from("job_listings")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }

  console.log("Successfully fetched data from Supabase:", data);
  return data;
}
