import { sumField } from "./task.js";

const invoices = [
  { id: "a", total: 12 },
  { id: "b", total: 8 },
];
sumField(invoices, "total");
// @ts-expect-error id is not numeric
sumField(invoices, "id");
// @ts-expect-error unknown key
sumField(invoices, "tax");
