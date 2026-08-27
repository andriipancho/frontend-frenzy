import { updateProperty } from "./task.js";

const user = { name: "Ada", age: 36 };
updateProperty(user, "name", "Grace");
updateProperty(user, "age", 37);
// @ts-expect-error name must receive a string
updateProperty(user, "name", 37);
// @ts-expect-error age must receive a number
updateProperty(user, "age", "old");
