# TS-NAR-010 — Type a mixed identifier list

A batch request carries its identifiers in one array, and each entry is
independently a string or a number, so `["u1", 2, "u3"]` is valid input.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Model one array of mixed elements, not a choice between two uniform arrays.
