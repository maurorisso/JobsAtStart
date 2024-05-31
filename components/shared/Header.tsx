import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import LoginDialog from "../Login/LoginDialog";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center font-bold text-xl">
          Jobs At Start
        </Link>

        <nav className="flex items-center gap-2">
          <Button variant="link">
            <Link href="#board">Browse Jobs</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Login</Button>
            </DialogTrigger>
            <LoginDialog />
          </Dialog>
        </nav>
      </div>
    </header>
  );
}

export default Header;
