# TS-CND-090 — Design cache read results

Implement `CacheRead` to design cache read results, while preserving the generic relationships in the contract.

## Constraints

- Model the freshness signal with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Fresh produces `{ hit: true; value: <the value>; stale: false }`.
- Stale produces `{ hit: false; value?: <the value>; stale: true }`, with `value` optional.
