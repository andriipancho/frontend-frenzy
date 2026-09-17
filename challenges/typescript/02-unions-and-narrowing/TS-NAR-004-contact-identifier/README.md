# TS-NAR-004 — Model contact identifiers

The contact directory stores modern identifiers as text, and it still serves
records imported from a legacy system where the same identifier is a number.
Widen `ContactId` so both forms are valid.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept `string` and `number`, and nothing else.
