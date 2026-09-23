# TS-PROD-047 — Derive a state store contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- The contract carries a readonly `state` holding a readonly view of the whole state.
- `selectors` keys each slice as `select` plus the capitalized key, taking no arguments and
  returning that slice.
- `actions` keys each slice as `set` plus the capitalized key, taking that slice's value and
  returning `void`.
