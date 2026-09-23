# TS-PROD-010 — Create a selector registry

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each state key becomes `select` followed by that key capitalized.
- Its value becomes a function taking the whole state and returning that key's own slice.
