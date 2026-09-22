# TS-CND-051 — Derive message priority

Implement `MessagePriority` to derive message priority, while preserving the generic relationships in the contract.

## Constraints

- Model priority-bearing shapes in precedence order with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

In this order:

- `urgent: true` produces `"critical"`;
- a `retry` property produces `"retryable"`;
- `silent: true` produces `"background"`;
- anything else produces `"normal"`.
