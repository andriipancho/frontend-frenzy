export type FormField = {
  type: "text" | "checkbox" | "select";
  value: string | boolean;
  options?: string[];
};
