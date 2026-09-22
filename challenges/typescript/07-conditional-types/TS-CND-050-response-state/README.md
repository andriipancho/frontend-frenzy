# TS-CND-050 — Classify response state shapes

Implement `ResponseState` to classify response state shapes, while preserving the generic relationships in the contract.

## Constraints

- Model the precedence of error, data, loading, and idle shapes with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

In this order:

- a shape carrying `error` produces `"error"`;
- a shape carrying `data` produces `"success"`;
- a shape carrying `loading` produces `"loading"`;
- anything else produces `"idle"`.
