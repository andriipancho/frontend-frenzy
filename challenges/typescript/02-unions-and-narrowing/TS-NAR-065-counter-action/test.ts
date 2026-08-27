import { reduceCounter } from "./task.js";

reduceCounter(2, { type: "increment", amount: 3 });
reduceCounter(2, { type: "decrement", amount: 1 });
reduceCounter(2, { type: "reset" });
