# TS-PROD-011 — Derive a validator registry

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each key keeps its name.
- Its validator takes that field's value first and the whole form second, and returns
  `string | undefined` — a message, or nothing when the field is valid.
