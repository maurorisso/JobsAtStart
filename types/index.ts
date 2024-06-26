export type Job = {
  id?: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  date?: string;
  type: string;
  apply_email?: string;
  description: string;
  apply_url: string;
  created_by?: string;
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
