# TS-PROD-006 — Derive safe entity creation inputs

Derive the exported production contract from the supplied domain model while preserving every key-specific relationship.

## Constraints

- Keep the supplied model and exported type name.
- Preserve exact inputs, outputs, and modifiers for each member.
- Do not use any, assertions, or a manually enumerated result.

## Contract

- The result is the model without the generated keys.
- Every remaining property keeps its own type and modifiers.
