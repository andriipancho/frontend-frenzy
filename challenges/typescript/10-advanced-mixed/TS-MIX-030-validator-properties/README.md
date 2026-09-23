# TS-MIX-030 — Build mixed property validators

Implement `PropertyValidators` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each value becomes the type predicate `(input: unknown) => input is <property type>`.
