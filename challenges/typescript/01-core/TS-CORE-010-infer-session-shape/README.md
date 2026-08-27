# TS-CORE-010 — Infer a session shape

Let TypeScript retain the returned session fields instead of hiding them behind the broad `object` type.

## Constraints

- Keep the returned object and its property names.
- Do not declare a separate interface.
- Use inference rather than an assertion.
