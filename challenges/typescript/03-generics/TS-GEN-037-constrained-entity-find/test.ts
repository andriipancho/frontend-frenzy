import { findEntity } from "./task.js";

const entity = findEntity([{ id: "u1", role: "admin" as const }], "u1");
entity?.role.toUpperCase();
