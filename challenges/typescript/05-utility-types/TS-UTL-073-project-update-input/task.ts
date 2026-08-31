export interface Project {
  id: string;
  name: string;
  ownerId: string;
  visibility: "private" | "public";
  archived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UpdateProjectInput = Partial<Project>;
