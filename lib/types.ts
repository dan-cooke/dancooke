export type Mattered<T> = {
  metadata: T;
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
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  slug: string;
  skills: string[];
};
