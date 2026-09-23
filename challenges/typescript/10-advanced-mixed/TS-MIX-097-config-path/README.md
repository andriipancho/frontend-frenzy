# TS-MIX-097 — Resolve mixed config paths

Implement `MixedPathValue` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Path segments are separated by `.` and are followed one at a time.
- A path that does not resolve produces `never`.
