# TS-PROD-012 — Derive serializers for non-string fields

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Fields already typed `string` are left out; every other field gets an entry.
- Each entry carries `serialize`, taking that field's value and returning `string`, and
  `parse`, taking a `string` and returning that field's own type.
