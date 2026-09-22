# TS-CND-048 — Derive role access level

Implement `RoleAccess` to derive role access level, while preserving the generic relationships in the contract.

## Constraints

- Model the role hierarchy with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- `"owner"` produces `"full"`.
- `"editor"` produces `"write"`.
- `"viewer"` produces `"read"`.
- Every other role produces `"none"`.
