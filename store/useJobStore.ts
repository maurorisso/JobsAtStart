// src/stores/useJobStore.js
import create from "zustand";
import { fetchJobs } from "@/lib/supabase/actions";
import { Job } from "@/types";


type Props = {
    jobs: Job[];
    fetchJobs: () => Promise<void>;
    };

export const useJobStore = create<Props> ((set) => ({
  jobs: [],
  fetchJobs: async () => {
    const jobs = await fetchJobs();
    set({ jobs });
  },
}));


