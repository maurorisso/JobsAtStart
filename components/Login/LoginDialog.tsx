import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { login, signup } from "@/lib/supabase/actions";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  closeDialog: () => void;
};

const LoginDialog = ({ closeDialog }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle> Login</DialogTitle>
        <DialogDescription>
          Log in to your account to access your saved jobs and apply to new
          ones.
        </DialogDescription>
      </DialogHeader>
      <form>
        <Label htmlFor="email">Email:</Label>
        <Input id="email" name="email" type="email" required />

        <Label htmlFor="password">Password:</Label>
        <Input id="password" name="password" type="password" required />
        <div className="flex justify-between px-2 py-4">
          <Button formAction={signup}>Sign up</Button>
          <Button formAction={login}>Log in</Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default LoginDialog;
