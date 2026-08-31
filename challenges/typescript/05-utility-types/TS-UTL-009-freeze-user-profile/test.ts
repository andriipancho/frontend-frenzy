import { freezeProfile } from "./task.js";

const profile = freezeProfile({ name: "Ada", email: "ada@example.com" });
// @ts-expect-error frozen profile is readonly
profile.name = "Grace";
