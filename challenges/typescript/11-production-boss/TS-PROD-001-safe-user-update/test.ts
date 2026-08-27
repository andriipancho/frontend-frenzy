import { updateUser, type User } from "./task.js";

const user: User = { name: "Ada", age: 36, active: true };

updateUser(user, "name", "Grace");
updateUser(user, "age", 37);
updateUser(user, "active", false);

// @ts-expect-error age requires a number
updateUser(user, "age", "37");
// @ts-expect-error name requires a string
updateUser(user, "name", true);
// @ts-expect-error active requires a boolean
updateUser(user, "active", 1);
