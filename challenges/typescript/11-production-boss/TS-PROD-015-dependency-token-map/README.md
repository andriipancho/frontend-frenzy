# TS-PROD-015 — Generate typed dependency tokens

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each key becomes `DI:` followed by that key uppercased.
- Its value carries `key`, the original key as a literal, and `service`, that dependency's own
  type; both are readonly.
