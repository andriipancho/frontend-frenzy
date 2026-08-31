import type { RequireKeys } from "./task.js";

type Config = { host?: string; port?: number; secure?: boolean };
const valid: RequireKeys<Config, "host" | "port"> = { host: "localhost", port: 80 };
// @ts-expect-error port is required
const invalid: RequireKeys<Config, "host" | "port"> = { host: "localhost" };
void valid;
void invalid;
