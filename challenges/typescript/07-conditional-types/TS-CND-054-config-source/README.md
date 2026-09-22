# TS-CND-054 — Classify configuration sources

Implement `ConfigSource` to classify configuration sources, while preserving the generic relationships in the contract.

## Constraints

- Model the source marker fields in precedence order with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

The first marker property present wins, in this order:

- `env` produces `"environment"`;
- `file` produces `"file"`;
- `defaults` produces `"defaults"`;
- a shape with none of them produces `"inline"`.
