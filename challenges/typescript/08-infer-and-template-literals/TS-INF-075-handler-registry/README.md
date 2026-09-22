# TS-INF-075 — Design generated handler registries

Implement `HandlerRegistry` to design generated handler registries, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from each event member's name and related payload.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Each union member's `name` becomes `on` followed by that name capitalized.
- Each handler takes that member's `payload` as its only parameter and returns
  `Promise<void>`.
- All members merge into one registry object.
