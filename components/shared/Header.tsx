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
import Image from "next/image";
import Thumbnail from "./Thumbnail";

async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("profiles")
    .select(`first_name, last_name, avatar_url`)
    .eq("id", user?.id)
    .single();

  const getInitals = (): string | null => {
    if (!data) return null;
    const firstName = data?.first_name.toLowerCase();
    const lastName = data?.last_name.toLowerCase();
    return `${firstName[0]}${lastName[0]}`;
  };

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
                  <Thumbnail path={data?.avatar_url} initials={getInitals()} />
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
