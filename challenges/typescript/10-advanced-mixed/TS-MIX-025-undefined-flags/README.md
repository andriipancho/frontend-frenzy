# TS-MIX-025 — Map mixed undefined flags

Implement `UndefinedFlags` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Every key is kept and becomes required.
- Its value becomes `true` when the property admits `undefined`, a `?` declaration included,
  and `false` otherwise.
