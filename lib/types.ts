export type Mattered<T> = {
  metadata: T;
  contentPreview: string;
  content: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  date: Date;
  slug: string;
  tags: string[];
};

export type JobMetadata = {
  company: string;
  role: string;
  logoUrl: string;
  startDate: Date;
  endDate?: Date;
  slug: string;
  skills: string[];
};
