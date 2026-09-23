# TS-MIX-084 — Design mixed validation results

Implement `MixedValidation` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A valid result produces `{ valid: true; value: T }`.
- An invalid one produces `{ valid: false; issues: readonly string[] }`, the value replaced by
  the collected messages.
