# TS-MIX-060 — Parse mixed environment keys

Implement `ParseEnvironment` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- An environment key is an uppercase namespace, `_`, then an uppercase key.
- The result carries `namespace` and `key`, both lowercased; text without `_` produces `never`.
