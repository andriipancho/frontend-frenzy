# TS-CND-098 — Model permission decisions

Implement `CanPerform` to model permission decisions, while preserving the generic relationships in the contract.

## Constraints

- Model the role hierarchy and then the requested action with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

The role decides which actions are permitted:

- `"owner"` may perform every action;
- `"editor"` may read and write, but not delete;
- `"viewer"` may only read.
