# TS-MIX-053 — Parse mixed route contracts

Implement `ParseRoute` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A route contract is an uppercase method, one space, then the path.
- The result carries `method` lowercased and `path` unchanged; text that is not a contract
  produces `never`.
