# TS-INF-068 — Infer asynchronous method results

Implement `AsyncMethodResults` to infer asynchronous method results, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the resolved return position of each method.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Every property keeps its own name.
- A method returning a promise produces the resolved value; anything else produces `never`.
