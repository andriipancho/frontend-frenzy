# TS-PROD-046 — Build an event platform contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- The contract carries `publish`, generic over the event union so the argument keeps its own
  member type, returning `void`.
- It also carries `handlers`, keyed by each member's `type`, where a handler takes the whole
  member and returns `Promise<void> | void`.
