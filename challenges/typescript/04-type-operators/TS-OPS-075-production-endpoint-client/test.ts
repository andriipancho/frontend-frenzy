import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EndpointClient } from "./task.js";

declare const client: EndpointClient;
const projects = client.invoke("listProjects", { organizationId: "org1" });
const updated = client.invoke("updateProject", {
  projectId: "p1",
  name: "Compiler Lab",
});
const deleted = client.invoke("deleteProject", { projectId: "p1" });
type Cases = [
  Expect<Equal<typeof projects, Promise<{ ids: string[]; nextCursor?: string }>>>,
  Expect<Equal<typeof updated, Promise<{ id: string; name: string; updatedAt: Date }>>>,
  Expect<Equal<typeof deleted, Promise<{ deleted: true }>>>,
];
// @ts-expect-error update requires a name
client.invoke("updateProject", { projectId: "p1" });
// @ts-expect-error list uses organizationId
client.invoke("listProjects", { projectId: "p1" });
export type TestCases = Cases;
