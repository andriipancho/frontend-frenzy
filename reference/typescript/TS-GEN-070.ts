export type SortDescriptor<
  T extends object,
  K extends keyof T,
> = {
  key: K;
  direction: "asc" | "desc";
};
