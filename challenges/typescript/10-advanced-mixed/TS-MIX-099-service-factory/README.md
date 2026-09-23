# TS-MIX-099 — Design mixed service factories

Implement `MixedFactories` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each key becomes `create` followed by that key capitalized.
- Its value becomes a function taking no arguments and returning the original service type.
