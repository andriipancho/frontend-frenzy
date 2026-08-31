import { copyProperty } from "./task.js";

const source = { name: "Ada", score: 10 };
const target = { name: "Grace", score: 8 };
copyProperty(source, target, "name");
copyProperty(source, target, "score");
// @ts-expect-error missing is not a shared property
copyProperty(source, target, "missing");
