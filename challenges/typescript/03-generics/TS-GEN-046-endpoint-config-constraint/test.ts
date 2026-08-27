import { preserveConfig } from "./task.js";

const config = preserveConfig({ endpoint: "/api", retries: 3 });
config.retries.toFixed();
// @ts-expect-error endpoint is required
preserveConfig({ retries: 3 });
