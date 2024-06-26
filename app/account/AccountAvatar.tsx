"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  uid: string | null;
  url: string | null;
  labelText?: string;
  onUpload: (url: string) => void;
};

export default function AccountAvatar({
  uid,
  url,
  onUpload,
  labelText,
}: Props) {
  const supabase = createClient();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadImage(path: string) {
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
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading image!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full flex  gap-16 items-center justify-between ">
      <div>
        <Label htmlFor="single">
          {uploading ? "Uploading ..." : `Upload a ${labelText} `}
        </Label>
        <Input
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>

      {avatarUrl ? (
        <Image
          width={150}
          height={150}
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
        />
      ) : (
        <div className="avatar no-image   " />
      )}
    </div>
  );
}
