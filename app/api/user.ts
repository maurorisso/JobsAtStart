import { createClient } from "@/lib/supabase/server";

export default async function handler(req, res) {
  const supabase = createClient(); // Replace with your auth service

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Failed to retrieve user data" });
  }
}
