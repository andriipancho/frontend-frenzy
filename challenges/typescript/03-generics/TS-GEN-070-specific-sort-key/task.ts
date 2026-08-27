export type SortDescriptor<
  T extends object,
  K extends keyof T,
> = {
  key: keyof T;
  direction: "asc" | "desc";
};
