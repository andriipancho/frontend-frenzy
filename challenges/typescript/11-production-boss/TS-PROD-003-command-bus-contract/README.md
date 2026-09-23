# TS-PROD-003 — Build a command bus contract

Derive the exported production contract from the supplied domain model while preserving every key-specific relationship.

## Constraints

- Keep the supplied model and exported type name.
- Preserve exact inputs, outputs, and modifiers for each member.
- Do not use any, assertions, or a manually enumerated result.

## Contract

- Each command key keeps its name and becomes a function taking that command's `input`.
- `async: true` makes the result `Promise<output>`; `async: false` returns `output` directly.
