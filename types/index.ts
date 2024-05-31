export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  date: string;
  description: string;
  apply_url: string;
  logo: string;
  tags: string[];
  sector: sector;
};

type sector = "Business" | "Tech" | "VC" | "Marketing" | "Sales" | "Other";
