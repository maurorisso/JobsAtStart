"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Plus, PlusIcon } from "lucide-react";

type Props = {
  isAddJob?: boolean;
};

export default function RedirectButton({ isAddJob = false }: Props) {
  const { toast } = useToast();

  async function handleRedirect() {
    toast({
      variant: "destructive",
      action: (
        <div className="w-full flex gap-2 items-center">
          🔍 Please login or sign up to post a job. Redirecting...
        </div>
      ),
    });
    //add delay
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }

  return isAddJob ? (
    <Button onClick={handleRedirect}>
      <PlusIcon size={16} />
      Add Job
    </Button>
  ) : (
    <Button variant="link" onClick={handleRedirect}>
      Post a Job
    </Button>
  );
}
