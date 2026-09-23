# TS-MIX-092 — Design mixed event registries

Implement `MixedEventRegistry` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each event key becomes `on` followed by that key capitalized.
- Each handler takes the event's payload as its only parameter and returns `Promise<void>`.
