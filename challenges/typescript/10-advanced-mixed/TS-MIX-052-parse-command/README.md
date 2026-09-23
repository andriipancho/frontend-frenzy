# TS-MIX-052 — Parse mixed command names

Implement `ParseCommand` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A command name is a domain, `.`, then the action.
- The result carries `domain` and `action`; text without a separator produces `never`.
