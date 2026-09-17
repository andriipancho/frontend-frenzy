export type Request =
  | { method: "GET"; body?: never; id?: never }
  | { method: "POST"; body: { [key: string]: unknown }; id?: never }
  | { method: "DELETE"; id: string; body?: never };
