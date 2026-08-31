export interface Commands {
  rename: (input: {
    projectId: string;
    name: string;
  }) => { renamed: true };
  archive: (
    projectId: string,
    at?: Date,
  ) => Promise<{ archivedAt: Date }>;
}

export type CommandArguments<
  K extends keyof Commands,
> = unknown[];

export type CommandResult<
  K extends keyof Commands,
> = unknown;
