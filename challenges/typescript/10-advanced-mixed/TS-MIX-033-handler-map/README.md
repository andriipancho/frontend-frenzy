# TS-MIX-033 — Generate mixed event handlers

Implement `MixedHandlers` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each event key becomes `on` followed by that key capitalized.
- Its value becomes `(payload: <event payload>) => void`.
