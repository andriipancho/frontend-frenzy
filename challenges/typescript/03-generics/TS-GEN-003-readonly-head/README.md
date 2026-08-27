# TS-GEN-003 — Type a readonly head helper

Make `head` accept readonly arrays while returning the array's element type or `undefined` for an empty input.

## Constraints

- Preserve the element type inferred by the caller.
- Accept mutable and readonly arrays.
- Do not use overloads, `any`, or assertions.
