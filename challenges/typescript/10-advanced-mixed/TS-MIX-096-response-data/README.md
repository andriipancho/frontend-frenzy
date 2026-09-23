# TS-MIX-096 — Normalize mixed response data

Implement `MixedResponseData` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A `{ data: … }` envelope is replaced by what it holds, repeatedly, so nested envelopes
  collapse to the innermost payload.
- A value that is not an envelope is returned unchanged.
