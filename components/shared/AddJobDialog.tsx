"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { set, z } from "zod";
import { Job, Sector } from "@/types/index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormItem from "./FormItem";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addJob } from "@/app/api";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  closeDialog: () => void;
};

function AddJobDialog({ closeDialog }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [job, setJob] = useState<Job>({
    title: "",
    date: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-time",
    description: "",
    apply_url: "",
    logo: "",
    tags: [],
    sector: "Tech",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };

  const FormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    company: z.string().min(1, "Company name is required"),
    location: z.string().min(1, "Location is required"),
    salary: z.string().optional(),
    type: z.enum([
      "Full-time",
      "Part-time",
      "Freelance",
      "Internship Full-time",
      "Internship Part-time",
    ]),
    description: z.string().min(1, "Description is required"),
    apply_url: z.string().url("Must be a valid URL"),
    logo: z.string().url("Must be a valid URL").optional(),
    tags: z.array(z.string()).optional(),
    sector: z.enum(["Tech", "Business", "VC", "Marketing", "Sales", "Other"]),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const jobData = FormSchema.parse(job);
      await addJob(jobData);
      router.refresh();
      closeDialog(); // Close the dialog on successful submission
      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full-time",
        description: "",
        apply_url: "",
        logo: "",
        tags: [],
        sector: "Tech",
      });

      toast({
        action: (
          <div className="w-full flex gap-2 items-center justify-between">
            <Check color="green" size={50} />
            <span className="first-letter:capitalize">
              {`Job ${jobData.title} at ${jobData.company} added successfully!`}
            </span>
          </div>
        ),
      });

      setErrors({}); // Clear errors on successful submission
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          newErrors[issue.path[0]] = issue.message;
        });
        setErrors(newErrors);
      } else {
        console.error("Error saving the job:", error.message);
        alert("Failed to save the job.");
      }
    }
  };

  return (
    <DialogContent className="max-w-5xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 mt-10">
        <DialogHeader>
          <DialogTitle>Add a New Job</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new job to the job board.
          </DialogDescription>
        </DialogHeader>

        <FormItem
          job={job}
          error={errors.title}
          handleChange={handleChange}
          label="Job Title"
          field="title"
          placeholder="Enter the job title"
        />
        <FormItem
          error={errors.company}
          job={job}
          handleChange={handleChange}
          label="Company Name"
          field="company"
          placeholder="Enter the company name"
        />
        <FormItem
          job={job}
          error={errors.location}
          handleChange={handleChange}
          label="Location"
          field="location"
          placeholder="Enter the location"
        />

        <div>
          <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize mb-1">
            Job Type
          </div>
          <Select
            onValueChange={(value) => {
              setJob({ ...job, type: value });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent
              position="item-aligned"
              align="end"
              className="w-full"
            >
              <SelectGroup className="w-full">
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectLabel>--Internship--</SelectLabel>
                <SelectItem value="Internship Full-time">
                  Internship Full-time
                </SelectItem>
                <SelectItem value="Internship Part-time">
                  Internship Part-time
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <FormItem
          error={errors.description}
          job={job}
          handleChange={handleChange}
          label="Job Description"
          field="description"
          placeholder="Enter job description"
        />
        <FormItem
          job={job}
          error={errors.apply_url}
          handleChange={handleChange}
          label="Apply URL"
          field="apply_url"
          placeholder="http://example.com/apply"
        />
        <FormItem
          job={job}
          error={errors.logo}
          handleChange={handleChange}
          label="Company Logo URL"
          field="logo"
          placeholder="http://example.com/logo.png"
          isRequired={false}
        />
        <FormItem
          job={job}
          handleChange={handleChange}
          label="Tags"
          field="tags"
          placeholder="Enter comma-separated tags"
        />

        <div>
          <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize mb-1">
            Sector
          </div>
          <Select
            onValueChange={(value) => {
              setJob({ ...job, sector: value as Sector });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sector" />
            </SelectTrigger>
            <SelectContent position="item-aligned" align="end">
              <SelectGroup>
                <SelectItem value="Tech">Tech</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="VC">VC</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button type="submit">Save Job</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default AddJobDialog;
