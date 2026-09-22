# TS-CND-091 — Model retry outcomes

Implement `RetryOutcome` to model retry outcomes, while preserving the generic relationships in the contract.

## Constraints

- Model whether the retry budget is zero with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A budget of `0` produces `{ ok: false; error: <the failure>; retried: false }`.
- Any other budget produces either
  `{ ok: true; value: <the value>; attempts: <the budget> }` or
  `{ ok: false; error: <the failure>; retried: true }`.
