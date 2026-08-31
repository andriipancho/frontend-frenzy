import { saveDraft } from "./task.js";

saveDraft({});
saveDraft({ email: "ada@example.com" });
saveDraft({ age: 37, subscribed: true });
// @ts-expect-error unknown form field
saveDraft({ displayName: "Ada" });
// @ts-expect-error age must be numeric
saveDraft({ age: "37" });
