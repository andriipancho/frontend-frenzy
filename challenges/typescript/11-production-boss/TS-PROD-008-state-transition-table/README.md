# TS-PROD-008 — Model a state transition table

Derive the exported production contract from the supplied domain model while preserving every key-specific relationship.

## Constraints

- Keep the supplied model and exported type name.
- Preserve exact inputs, outputs, and modifiers for each member.
- Do not use any, assertions, or a manually enumerated result.

## Contract

- Each member's `from` state becomes a key of the table.
- Its value is that member's `to` states, a union of destinations included.
