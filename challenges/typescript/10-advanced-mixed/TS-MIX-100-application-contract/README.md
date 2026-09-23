# TS-MIX-100 — Design mixed application contracts

Implement `ApplicationContract` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each operation key becomes `run` followed by that key capitalized, and its value takes the
  operation's `input` as its only parameter.
- `async: true` makes the result `Promise<output>`; `async: false` returns `output` directly.
