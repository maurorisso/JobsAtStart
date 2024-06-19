import { Job } from "@/types/index";
import { createClient } from "./server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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

export async function login(formData: FormData) {
  "use server";

  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  redirect("/");
}

export async function signup(formData: FormData) {
  "use server";

  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    first_name: formData.get("firstName") as string,
    last_name: formData.get("lastName") as string,
  };

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}
