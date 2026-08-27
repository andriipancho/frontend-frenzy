export type Request = {
  method: "GET" | "POST" | "DELETE";
  body?: { [key: string]: unknown };
  id?: string;
};
