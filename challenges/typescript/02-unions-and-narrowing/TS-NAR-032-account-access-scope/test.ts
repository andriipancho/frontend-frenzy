import { accessScope } from "./task.js";

accessScope({ id: "a1", permissions: ["read", "write"] });
accessScope({ id: "a2", teamId: "frontend" });
