import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EndpointMethodName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EndpointMethodName<"GET /users">,
      "getUsers"
    >
  >,
  Expect<
    Equal<
      EndpointMethodName<"POST /invoice">,
      "postInvoice"
    >
  >,
  Expect<
    Equal<
      EndpointMethodName<"invalid">,
      never
    >
  >,
];

export type TestCases = Cases;
