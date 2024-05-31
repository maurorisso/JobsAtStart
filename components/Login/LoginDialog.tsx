import { login } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useDialogStore } from "@/store/dialog";

type Props = {};

const LoginDialog = (props: Props) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          Don't have an account yet? No problem! Sign up {""}
          <Link href="/signup" className="hover:underline font-semibold ">
            here
          </Link>
        </DialogDescription>
      </DialogHeader>
      <form action="">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              required
              type="email"
              placeholder="user@start-berlin.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              required
              placeholder="********"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button formAction={login}>Login</Button>
        </DialogFooter>{" "}
      </form>
    </DialogContent>
  );
};

export default LoginDialog;
