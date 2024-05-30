import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  date: string;
  description: string;
  applyLink: string;
  logo: string;
  tags: string[];
  sector: sector;
};

type sector = "Business" | "Tech" | "VC" | "Marketing" | "Sales" | "Other";

function JobItem({
  title,
  company,
  location,
  salary,
  type,
  date,
  description,
  applyLink,
  logo,
  tags,
  sector,
}: Props) {
  return (
    <Card className="flex p-5">
      <CardHeader>
        <Image width={200} height={200} src={logo} alt="company logo" />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
        <CardDescription>{location}</CardDescription>
        <CardDescription>{salary}</CardDescription>
        <CardDescription>{type}</CardDescription>
        <CardDescription>{date}</CardDescription>
        <CardDescription>{description}</CardDescription>
        <CardDescription>{applyLink}</CardDescription>
        <CardDescription>{tags.join(", ")}</CardDescription>
        <CardDescription>{sector}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default JobItem;
