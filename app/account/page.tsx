import AccountForm from "./AccountForm";
import { createClient } from "@/lib/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <div>
      <h1 className="text-center text-3xl my-5 font-bold">My Account</h1>
      <AccountForm user={user} />
    </div>
  );
}
