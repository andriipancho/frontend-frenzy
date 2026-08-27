import { preserveCreated } from "./task.js";

const value = preserveCreated({ createdAt: new Date(), id: "r1" });
value.id.toUpperCase();
