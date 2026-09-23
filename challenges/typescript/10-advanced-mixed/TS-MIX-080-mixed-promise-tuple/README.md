# TS-MIX-080 — Resolve mixed promise tuples

Implement `ResolveTuple` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each position holding a promise is replaced by its resolved value.
- Positions holding anything else are left as they are, and the tuple keeps its length and
  order.
