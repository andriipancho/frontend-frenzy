export interface Project {
  id: string;
  name: string;
  ownerId: string;
  visibility: "private" | "public";
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProjectInput = Project;
