# TS-CND-053 — Select identifier storage

Implement `IdStorage` to select identifier storage, while preserving the generic relationships in the contract.

## Constraints

- Model the supported identifier primitive with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- `string` produces `"text"`.
- `number` produces `"numeric"`.
- `bigint` produces `"big-int"`.
- Every other type produces `"unsupported"`.
