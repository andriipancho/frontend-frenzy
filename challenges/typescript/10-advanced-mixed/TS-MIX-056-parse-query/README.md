# TS-MIX-056 — Parse mixed query pairs

Implement `ParseQuery` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A query pair is a key, `=`, then the value.
- The result carries `key` and `value`; text without `=` produces `never`.
