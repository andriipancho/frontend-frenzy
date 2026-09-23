# TS-MIX-037 — Generate mixed test identifiers

Implement `TestIdentifiers` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each key becomes `test` followed by that key capitalized.
- The value is the original key as a string literal, not the property's own type.
