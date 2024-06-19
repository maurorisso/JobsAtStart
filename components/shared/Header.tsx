import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeaderDropdown } from "./HeaderDropdown";

async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("profiles")
    .select(`first_name, last_name`)
    .eq("id", user?.id)
    .single();

  const getInitals = () => {
    if (!data) return;
    const firstName = data?.first_name.toLowerCase();
    const lastName = data?.last_name.toLowerCase();
    return `${firstName[0]}${lastName[0]}`;
  };

  const avatarSrc = `https://cdn.auth0.com/avatars/${getInitals()}.png`;
  console.log(avatarSrc);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center font-bold text-xl">
          Jobs At Start
        </Link>

        <nav className="flex items-center gap-2">
          <Button variant="link" asChild>
            <Link href="/#board">Browse Jobs</Link>
          </Button>
          {user ? (
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={avatarSrc} alt="avatar" />
                    <AvatarFallback className="uppercase">
                      {" "}
                      {getInitals()}{" "}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <HeaderDropdown />
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
