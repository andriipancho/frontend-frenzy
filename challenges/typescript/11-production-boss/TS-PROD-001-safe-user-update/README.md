# TS-PROD-001 — Design a safe user update API

The current `updateUser` API accepts a valid key and a valid user value independently, allowing mismatched pairs. Redesign its type signature so the value is correct for the selected key while keeping the runtime body straightforward.

## Constraints

- Preserve the `User` model and single `updateUser` function.
- Reject mismatched key/value pairs at the call site.
- Do not use overloads, `any`, or assertions.
- Prefer a maintainable relationship over a large enumeration of cases.
