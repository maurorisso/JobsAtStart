"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

type Props = {
  path: string;
  initials: string | null;
};

function Thumbnail({ path, initials }: Props) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageUrl = async (path: string) => {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }
        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error fetching image URL", error);
      }
    };

    if (path) {
      fetchImageUrl(path);
    }
  }, [path, supabase]);

  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src={avatarUrl} alt="avatar" />
      <AvatarFallback className="uppercase"> {initials}</AvatarFallback>
    </Avatar>
  );
}
export default Thumbnail;
