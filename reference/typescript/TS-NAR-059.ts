export type FormField =
  | { type: "text"; value: string; options?: never }
  | { type: "checkbox"; value: boolean; options?: never }
  | { type: "select"; value: string; options: string[] };
