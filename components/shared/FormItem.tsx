
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Job } from '@/types'
import { error } from 'console';
import React from 'react'

type Props = {
  job: Job;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
  placeholder: string;
  field: keyof Job; 
  type?:  "select" | "text" | "number" | "email" | "password" | "date";
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
    label
}: Props) {
  return (
    <div className=" flex flex-col  gap-1  ">
      <Label htmlFor="company" className=" capitalize">
        {label}
      </Label>
      <Input
        id={field as string}
        type={type}
        placeholder={placeholder}
        name={field as string}
        value={job[field] as unknown as string} // Ensuring the value is treated as a string, handle with care
        onChange={handleChange}
        className="col-span-3"
      required = {isRequired}
      />

{error && <p className="text-red-500 text-sm">{error}</p>}

    </div>
  );
}

export default FormItem