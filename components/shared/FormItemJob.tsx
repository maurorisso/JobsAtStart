import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Job } from "@/types";
import { error } from "console";
import React, { ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  job: Job;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  label: string;
  id: string;
  error?: string;
  placeholder: string;
  field: keyof Job;
  type?:
    | "select"
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "textarea";
  isRequired?: boolean;
};

function FormItem({
  job,
  handleChange,
  field,
  placeholder,
  type = "text",
  error,
  isRequired = false,
  label,
}: Props) {
  return (
    <div className=" flex flex-col  gap-1  ">
      <Label htmlFor="company" className=" capitalize">
        {label}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={field as string}
          onChange={handleChange}
          placeholder={placeholder}
          name={field as string}
          value={job[field] as unknown as string} // Ensuring the value is treated as a string, handle with care
          className="col-span-3"
          required={isRequired}
        />
      ) : (
        <Input
          id={field as string}
          type={type}
          placeholder={placeholder}
          name={field as string}
          value={job[field] as unknown as string} // Ensuring the value is treated as a string, handle with care
          onChange={handleChange}
          className="col-span-3"
          required={isRequired}
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default FormItem;
