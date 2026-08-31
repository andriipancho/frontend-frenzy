export interface Commands {
  archive: {
    input: { documentId: string };
    output: { archivedAt: Date };
  };
  restore: {
    input: { archiveId: string };
    output: { documentId: string };
  };
}

export function execute(
  command: keyof Commands,
  input: Commands[keyof Commands]["input"],
): Commands[keyof Commands]["output"] {
  void command;
  void input;
  throw new Error("Executor not implemented");
}
