export type Job = {
  title: string;
  company: string;
  location: string;
  salary?: string;
  date?: string;
  type: string;
  description: string;
  apply_url: string;
  logo?: string;
  tags?: string[];
  sector: "Tech" | "Business" | "VC" | "Marketing" | "Sales" | "Other";
};

export type Sector =
  | "Business"
  | "Tech"
  | "VC"
  | "Marketing"
  | "Sales"
  | "Other";
