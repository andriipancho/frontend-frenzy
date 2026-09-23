# TS-MIX-051 — Parse mixed event names

Implement `ParseEvent` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- An event name is a namespace, `:`, then the event.
- The result carries `namespace` and `event`; text without a separator produces `never`.
