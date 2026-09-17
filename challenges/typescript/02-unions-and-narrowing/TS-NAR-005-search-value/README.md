# TS-NAR-005 — Model searchable primitives

A search filter compares a field against a value the caller supplies as text, as
a number, or as a boolean flag. `SearchValue` must cover all three.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept `string`, `number`, and `boolean`, and nothing else.
